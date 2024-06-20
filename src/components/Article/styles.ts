import styled from "styled-components";

export const MainArticleDiv = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    min-height:100vh;
    height: fit-content;
    position:relative;
    @media screen and (max-width: 900px){
        grid-template-columns: 1fr;
        grid-template-rows: auto;
        border:1px solid red;

    }
`;

export const StyleSideDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content: center;
    background-color: rgba(255,255,255,0.1);
`;

export const StyledSideTitle = styled.p`
    font-size:1.1rem;
    padding: 1rem;
`;