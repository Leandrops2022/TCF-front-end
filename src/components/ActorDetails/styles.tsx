import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding-bottom: 2rem;
`;

export const MainContentDiv = styled.div`
    display: flex;
    flex-direction: column;
    background-color: var(--primary-color);
    opacity:1;
    border-radius:8px;
    min-height: 70vh;
    border-left: 2px solid silver;
    border-bottom:1px solid black;
    box-shadow: 8px 8px 20px black;
    width:80vw;
    margin: 1.5rem auto;

    @media screen and (max-width: 1000px) {
        width:100%
    }
`;

export const ActorPersonalInfo = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    width:100%;
    align-items:flex-start;
    @media screen and (max-width: 1000px){
        flex-direction:column;
    }
`;

export const ActorImageDiv = styled.div`
    border-right:2px solid silver;
    border-radius:6px;
    box-shadow: 4px 4px 30px black;
    height: fit-content;
    width: fit-content;
    @media screen and (max-width: 1000px) {
        align-self: center;
    }
`;

export const ActorImage = styled.img`
    border-radius:6px
`;

export const ActorInfoDiv = styled.div`
    width: 70%;  
    padding:1rem;
    height:100%;
    box-sizing: border-box;
    @media screen and (max-width: 1000px){
        width:100%;
    } 
`;

export const ActorBiography = styled.div`
    padding:1rem;
`;

export const StyledUl = styled.ul`
    display: grid;
    row-gap:1rem;
    column-gap:2rem;
    grid-template-columns: 40% 40%;
    justify-content: center;
    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr;
    }
`;

/* export const StyledLi = styled.li`

`; */

export const StyledSmallMovieDiv = styled.div`
    border-right:1px solid silver;
    border-bottom: 1px solid black;
    /* background: linear-gradient(169deg, rgba(219,224,226,1) 0%, rgba(106,102,102,1) 45%, rgba(36,37,37,1) 89%); */
    background: linear-gradient(169deg, rgba(219,224,226,1) 0%, rgba(106,102,102,1) 35%, rgba(36,37,37,1) 91%);
    border-radius: 6px;
    display: flex;
`;

export const StyledP = styled.p`
    color: whitesmoke;
    text-shadow: 1px 1px 1px black;
    margin-bottom: 0.8rem;
`;

