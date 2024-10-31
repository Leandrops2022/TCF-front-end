import { RefObject } from "react";
import HilightInterface from "../../../Interfaces/HighlightInterface";
import { PaginationDataInterface } from "../../../Interfaces/PaginationDataInterface";
import HighLightsComponent from "../../HightLightsComponent";
import LoadingIndicator from "../../LoadingIndicator";
import { PaginationDiv } from "../../MovieCardsAndPagination/styles";
import Pagination from "../../Pagination";


interface ReturnElementProps {
    isLoading: boolean;
    contentList: HilightInterface[];
    paginationData: PaginationDataInterface | null;
    currentPage: number;
    headerRef: RefObject<HTMLDivElement>;
    setIsloading: (value: boolean) => void;
    fetchData: (page: number) => void;
}

const ReturnElement: React.FC<ReturnElementProps> = ({ isLoading, contentList, paginationData, currentPage, headerRef, setIsloading, fetchData }) => {
    if (isLoading) {
        return <LoadingIndicator />
    }

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

export default ReturnElement;