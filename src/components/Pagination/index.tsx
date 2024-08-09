import React from 'react';
import { Ellipsis, PageButton, PaginationContainer } from './styles';

interface PaginationProps {
    currentPage: number;
    lastPage: number;
    onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, lastPage, onPageChange }) => {
    const generatePages = () => {
        const pages = [];
        const numAdjacentPages = 1;
        const startPage = Math.max(2, currentPage - numAdjacentPages);
        const endPage = Math.min(lastPage - 1, currentPage + numAdjacentPages);

        pages.push(1); // Always show the first page

        if (startPage > 2) {
            pages.push("..."); // Ellipsis if there's a gap from 1 to the first page in the loop
        }

        for (let i = startPage; i <= endPage; i++) {
            pages.push(i);
        }

        if (endPage < lastPage - 1) {
            pages.push("..."); // Ellipsis if there's a gap from the last page in the loop to the last page
        }

        pages.push(lastPage); // Always show the last page

        return pages;
    };

    const handlePageChange = (page: number | string) => {
        if (typeof page === 'number' && page !== currentPage) {
            onPageChange(page);
        }
    };

    return (
        <PaginationContainer>
            <PageButton
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
            >
                {"<"}
            </PageButton>

            {generatePages().map((page, index) =>
                typeof page === 'number' ? (
                    <PageButton
                        key={index}
                        onClick={() => handlePageChange(page)}
                        $active={page === currentPage}
                    >
                        {page}
                    </PageButton>
                ) : (
                    <Ellipsis key={index}>{page}</Ellipsis>
                )
            )}

            <PageButton
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === lastPage}
            >
                {">"}
            </PageButton>
        </PaginationContainer>
    );
};

export default Pagination;
