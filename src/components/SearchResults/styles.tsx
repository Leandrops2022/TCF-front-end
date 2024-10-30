import { Pagination, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import styled from "styled-components";


export const MainSearchResultsDiv = styled.div`
    width: 90vw;
    margin: auto;
    min-height: 50vh;
    display: flex;
    flex-direction: column;
    position: relative;
    justify-content: space-between;
`;

export const StyledUL = styled.ul`
    display: flex;
    flex-direction: column;
`
export const StyledLink = styled(Link)`
    border-bottom:2px solid silver;  
    border-left:1px solid silver;  
    border-right:1px solid black;
    border-radius:6px;
    position: relative;

    box-shadow: 2px 2px 8px black;
    background: linear-gradient(169deg, rgba(219,224,226,1) 0%, rgba(106,102,102,1) 35%, rgba(36,37,37,1) 91%);
    width:100%;
    height:fit-content;
    margin: 0.5rem 0;
    &:hover {
        background: silver;
        color:black;
    }

    @media screen and (max-width:1000px) {
        height:10rem;
    }

`;

export const StyledLi = styled.li`
    display:flex;
    gap:0.5rem;
    width:100%;
    height: 97%;
  
`;

export const ImageDiv = styled.div`
    box-shadow: 2px 2px 15px black;
    border-radius:6px;
    width: 150px;
    @media screen and (max-width:1000px) {
        width: 100px;
    }
`;

export const StyledImage = styled.img`
    width: 100%;
    border-radius:6px;
   
`;

export const ResultContentDiv = styled.div`
        display: flex;
        flex-direction:column;
        align-items:center;
        justify-content:center;
        padding: 1rem;
        width: 100%;
        @media screen and (max-width: 1000px) {
            width:270px;

        }
`;

export const TagDiv = styled.div`
    background-color: black;
    color: var(--primary-yellow);
    padding:1rem;
    border-radius:0 0 0 6px;
    position: absolute;
    top:0;
    right:0;
`;


export const StyledStack = styled(Stack)`
    display:flex;
    align-self: center;
    left:auto;
    margin-top: 3rem;
`

export const StyledPagination = styled(Pagination)`
    
`