import styled from "styled-components";

export const MainContainer = styled.div`
    width: 100%;
    margin:auto;
    display:flex;
    flex-direction: column;
    align-items: center;
`;

export const CoverDiv = styled.div`
    width: 65%;
    margin: 0 0 3rem 0;   
    @media screen and (max-width: 1000px) {
        width: 100%;
    }
`;

export const CoverImg = styled.img`
width: 100%;
`
export const TextContentDiv = styled.div`
    margin: 2rem 0;
    width:80%;
    margin:0;
    margin-bottom: 3rem;
    box-sizing:border-box;
    padding-right: 0%.5;
    @media screen and (max-width: 900px) {
        padding-right: 0;
        width:98%;

    }
`;

export const Title = styled.h1`
    width:100%;
    margin:2rem auto;
    padding-bottom:0;
    margin-bottom:0;
`

export const MainContentDiv = styled.div`
    img {
        width: 80% !important;
        margin: 2rem 0;
    }
`;