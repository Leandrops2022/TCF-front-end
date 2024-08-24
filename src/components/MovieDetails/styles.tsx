import styled from "styled-components";



export const Container = styled.div`
    display:grid;
    grid-template-columns: 4fr auto;
    padding-bottom: 25rem;
    @media screen and (max-width: 1000px) {
        display: flex;
        flex-direction:column;
    }
`;

export const MainContentDiv = styled.div`
    display: flex;
    background-color: var(--primary-color);
    opacity:1;
    border-radius:8px;
    min-height: 70vh;
    border-left: 2px solid silver;
    border-bottom:1px solid silver;
    box-shadow: 8px 8px 20px black;
`

export const CoverDiv = styled.div`
    display: flex;
    background-color: var(--primary-color);
    opacity:1;
    border-radius:8px;
    min-height: 70vh;
    border-left: 2px solid silver;
    border-bottom:1px solid silver;
    box-shadow: 8px 8px 20px black;
    width:30%;
    @media screen and (max-width: 1000px) {
        min-height:30vh;
        height:30vh;
        width: fit-content;
        align-items:center;
        justify-content:left;
    }
  
`;

export const StyledCover = styled.img`
    height: 99.9%;
    border-radius:8px;
    @media screen and (max-width: 1000px) {
       height:100%;
       width: auto;
    }
`

export const MovieBaseInfo = styled.div`
    display:flex;
    flex-direction:column;
`;

export const MovieSynopsis = styled.div``;
