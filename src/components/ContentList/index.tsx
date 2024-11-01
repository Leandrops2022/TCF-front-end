import { useContext, useEffect, useRef, useState } from "react"
import { PaginationDataInterface } from "../../Interfaces/PaginationDataInterface";
import HilightInterface from "../../Interfaces/HighlightInterface";
import axios from "axios";
import { MyContext } from "../../MyContext";
import { useLocation } from "react-router-dom";
import ReturnElement from "./component/ReturnElement";

const ContentList = () => {
    const [paginationData, setPaginationData] = useState<PaginationDataInterface | null>(null);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [contentList, setContentList] = useState<HilightInterface[]>([]);
    const [isLoading, setIsloading] = useState<boolean>(true);

    const headerRef = useRef<HTMLDivElement>(null);

    const { defaultOfficialUrl } = useContext(MyContext);

    const location = useLocation();
    const currentPath = location.pathname;

    const fetchData = (page: number) => {
        const url = `${defaultOfficialUrl}/api${currentPath}?page=${page}`;

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


    return (<ReturnElement
        isLoading={isLoading}
        contentList={contentList}
        paginationData={paginationData}
        currentPage={currentPage}
        headerRef={headerRef}
        setIsloading={setIsloading}
        fetchData={fetchData}
    />);
}

export default ContentList;