import { useContext, useEffect, useRef, useState } from "react"
import HighLightsComponent from "../HightLightsComponent"
import { PaginationDataInterface } from "../../Interfaces/PaginationDataInterface";
import { PaginationDiv } from "../MovieCardsAndPagination/styles";
import Pagination from "../Pagination";
import HilightInterface from "../../Interfaces/HighlightInterface";
import axios from "axios";
import { MyContext } from "../../MyContext";
import { useLocation, useParams } from "react-router-dom";

const ContentList = () => {
    const [paginationData, setPaginationData] = useState<PaginationDataInterface | null>(null);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [contentList, setContentList] = useState<HilightInterface[]>([]);
    const [isLoading, setIsloading] = useState<boolean>(true);

    const headerRef = useRef<HTMLDivElement>(null);

    const { defaultUrl } = useContext(MyContext);

    const location = useLocation();
    const currentPath = location.pathname;

    const fetchData = (page: number) => {
        const url = `${defaultUrl}${currentPath}?page=${page}`;

        axios.get(url)
            .then(response => {
                if (response.status === 200) {
                    const { data, ...pagination } = response.data;
                    console.log(data);
                    setContentList(data);
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
        setCurrentPage(1);
        fetchData(1);

    }, [currentPath]);


    return <div className={"mt-5"}>
        <div ref={headerRef}></div>

        <HighLightsComponent
            highlights={contentList || []}
            cardsQuantity={10}
            gridConfig={{
                columns: 4,
                rows: 1
            }}
        />
        <PaginationDiv>
            {paginationData && (<Pagination
                currentPage={currentPage}
                lastPage={paginationData.last_page}
                onPageChange={(page) => {
                    setIsloading(true);
                    if (headerRef.current) {
                        headerRef.current.scrollIntoView({
                            behavior: 'instant',
                        });
                    }
                    fetchData(page)
                }}
            />)}
        </PaginationDiv>
    </div>
}

export default ContentList;