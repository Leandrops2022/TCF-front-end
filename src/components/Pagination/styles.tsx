import styled from "styled-components";

export const PaginationContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    margin-top: 20px;
    width: 90%;
`;

export const Ellipsis = styled.span`
    padding: 0.5rem 0.5rem;
`;

export const PageButton = styled.button<{ $active?: boolean }>`
    padding: 0.5rem 0.5rem;
    border: none;
    background-color: ${({ $active }) => ($active ? '#007bff' : '#f0f0f0')};
    color: ${({ $active }) => ($active ? 'white' : 'black')};
    font-weight: ${({ $active }) => ($active ? 'bold' : 'normal')};
    cursor: pointer;
    border-radius: 4px;

    &:disabled {
        background-color: #ccc;
        cursor: not-allowed;
    }

    &:hover {
        background-color: ${({ $active }) => ($active ? '#0056b3' : '#e0e0e0')};
    }
`;