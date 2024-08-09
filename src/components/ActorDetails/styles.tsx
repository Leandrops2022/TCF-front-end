import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding-bottom: 25rem;
`;

export const MainContentDiv = styled.div`
    display: flex;
    background-color: var(--primary-color);
    opacity:1;
    border-radius:8px;
    min-height: 70vh;
    border-left: 2px solid silver;
    border-bottom:1px solid black;
    box-shadow: 8px 8px 20px black;
    width:80vw;
    margin: 1.5rem auto;
`;

export const ActorPersonalInfo = styled.div`
    display:flex;
    flex-direction:row;
`;

export const ActorImageDiv = styled.div``;
export const ActorImage = styled.img``;
export const ActorInfoDiv = styled.div``;

export const ActorBiography = styled.div``;