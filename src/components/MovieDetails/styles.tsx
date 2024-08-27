import styled from "styled-components";



export const Container = styled.div`
    display:flex;
    flex-direction:row;
    justify-content: space-evenly;
    @media screen and (max-width: 1000px) {
        display: flex;
        flex-direction:column;
    }
`;

export const CoverDiv = styled.div`
    display: flex;
    background-color: var(--primary-color);
    opacity:1;
    border-radius:8px;
    height: 60vh;
    border-left: 2px solid silver;
    border-bottom:1px solid silver;
    box-shadow: 8px 8px 20px black;
    width:fit-content;
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

export const MainContentDiv = styled.div`
    display: flex;
    flex-direction: column;
    /* background-color: var(--primary-color); */
    background-color: rgba(1, 28, 44, 0.178);
    opacity:1;
    border-radius:8px;
    height: fit-content;
    padding-bottom:2rem;
    width:70vw;
    border-left: 2px solid silver;
    border-bottom:1px solid silver;
    box-shadow: 8px 8px 20px black;
`

export const MovieTitle = styled.h1`
    text-align:left;
    padding:1rem 2rem;
    text-align:center;
    color:silver;
`;

export const MovieGenres = styled.p`
    text-align:left;
    padding: 1rem 2rem;
    text-align:center;
    color:silver;
    font-size:1.3rem;
`;

export const MovieSynopsis = styled.p`
    text-align:left;
    padding: 1rem 2rem;
    text-align:left;
    color:silver;
    font-size:1.4rem;
    line-height:1.4rem
`;

