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
    padding-right: 0.5rem;

    h1{
        font-size:1.8rem;
    }

    iframe {
        width: 50% !important;
        align-self: center;
        justify-self:center;
    }

    @media screen and (max-width: 900px) {
        padding-right: 0;
        width:98%;
        font-size:1.1rem;

        iframe {
            width: 100% !important;
        }
        p{
            line-height: 1.3rem;
        }

        h3 {
            margin: 1.5rem 0;
            font-size: 1.3rem;
        }

    }
`;

export const Title = styled.h1`
    width:100%;
    margin:2rem auto;
    padding-bottom:0;
    margin-bottom:0;
`

export const MainContentDiv = styled.div`
    display: flex;
    flex-direction: column;
    
    figure {
        justify-self: center;
        width:50%;
    }

    img {
        width: 100% !important;
        margin: 2rem 0;
    }

    @media screen and (max-width: 900px) {
        img {
            width: 100% !important;
            margin: 2rem 0;
        }

        figure {
            width:100%;
        }
    }
`;