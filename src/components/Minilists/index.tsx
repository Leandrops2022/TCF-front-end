import { useContext, useEffect, useRef, useState } from "react"
import HighLightsComponent from "../HightLightsComponent"
import useFetchUrl from "../../Hooks/useFetchUrl";
import { PaginationDataInterface } from "../../Interfaces/PaginationDataInterface";
import { PaginationDiv } from "../MovieCardsAndPagination/styles";
import Pagination from "../Pagination";
import HilightInterface from "../../Interfaces/HighlightInterface";
import axios from "axios";
import { MyContext } from "../../MyContext";

const Minilists = () => {
    const [paginationData, setPaginationData] = useState<PaginationDataInterface | null>(null);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [minilists, setMinilists] = useState<HilightInterface[]>([]);
    const [isLoading, setIsloading] = useState<boolean>(true);

    const headerRef = useRef<HTMLDivElement>(null);

    const {defaultUrl} = useContext(MyContext);

    const fetchMinilists = (page: number) => {
        const url =`${defaultUrl}/minilista?page=${page}`;

        axios.get(url)
            .then(response => {
                if (response.status === 200) {
                    const { data, ...pagination } = response.data;
                    console.log(data);
                    setMinilists(data);
                    setPaginationData(pagination);
                    setCurrentPage(page);
                    setIsloading(false);

                } else {
                    console.log('Something went wrong');
                }
            })
            .catch(error => {
                console.error("There was an error fetching the data!", error);
            });
    };

    useEffect(() => {
       
        fetchMinilists(currentPage);
      
    }, [currentPage]);


    
    return <div className={"mt-5"}>
            <div ref={headerRef}></div>

        <HighLightsComponent
            highlights={minilists || []}
            cardsQuantity={4}
            gridConfig={{
                columns: 4,
                rows: 1
            }}
        />
        <PaginationDiv>
       {paginationData && ( <Pagination
            currentPage={currentPage}
            lastPage={paginationData.last_page}
            onPageChange={(page) => {
                setIsloading(true);
                if (headerRef.current) {
                    headerRef.current.scrollIntoView({
                        behavior: 'instant', 
                    });
                }
                fetchMinilists(page)
            }}
        />)}
        </PaginationDiv>
    </div>
}

export default Minilists;