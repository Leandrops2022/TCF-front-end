import styled from "styled-components";

export const MainContainer = styled.div`
    width: 100%;
    margin:auto;
`;

export const CoverDiv = styled.div`
    width: 90%;
    margin: 0 0 3rem 0;   
    @media screen and (max-width: 1000px) {
        width: 97%;
    }
`;

export const CoverImg = styled.img`
width: 100%;
`
export const TextContentDiv = styled.div`
    margin: 2rem 0;
    width:100%;
    margin:0 auto;
    margin-bottom: 3rem;
    box-sizing:border-box;
    padding-right: 0%.5;
    @media screen and (max-width: 900px) {
        padding-right: 0;
    }
`;

export const Title = styled.h1`
    width:100%;
    margin:2rem auto;
`