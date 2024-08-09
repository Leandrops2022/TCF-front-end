import styled from "styled-components";

export const MainContainer = styled.div`
    width:80vw;
    margin: 1rem auto 22rem auto;
    @media screen and (max-width: 900px) {
        width:100%
    }
`;

export const CoverContainer = styled.div`
    width: 60vw;
    border:1px solid green;
     @media screen and (max-width: 900px) {
        width:94vw;
    }
`

export const CoverImg = styled.img`
    width:100%;
     @media screen and (max-width: 900px) {
    }
`

export const StyledIframe = styled.iframe`
    margin:1rem 0 2rem 0;
    height:30vh;
    width:90vw;
`

export const ArticleContainer = styled.div`
    margin: 0 0 5rem 0;
`;