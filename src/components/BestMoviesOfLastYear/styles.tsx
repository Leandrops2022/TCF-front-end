import styled from "styled-components";

export const MainContentDiv = styled.div`
    display:flex;
    flex-direction:column;
    width:60vw;
    margin: 1rem auto 20rem auto;
    @media screen and (max-width: 1000px) {
        width: 96vw;
        
    }
`;

// export const CoverDiv = styled.div`
//     width: 90%;
//     margin: 0 0 3rem 0;   
//     @media screen and (max-width: 1000px) {
//         width: 97%;
//     }
// `;

// export const CoverImg = styled.img`
// width: 100%;
// `

// export const TextContentDiv = styled.div`
//     margin: 2rem 0;
//     width:100%;
//     margin:0 auto;
//     margin-bottom: 3rem;
//     box-sizing:border-box;
//     padding-right: 1.5rem;

// `;

// export const Title = styled.h1`
//     width:100%;
//     margin:2rem auto;
// `

// export const PaginationDiv = styled.div`
//     display:flex;
//     width:100%;
//     margin: 4rem 0;
//     align-items: center;
//     justify-content: center;
// `;

// export const CardsHoldingContainer = styled.div`
//     display:flex;
//     flex-direction:column;
//     align-items: center;
//     position:relative;
// `;