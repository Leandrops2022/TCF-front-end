import styled from "styled-components";

interface MainContentDivProps {
    backgroundUrl?: string;
}

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding-bottom: 25rem;
`;

export const MainContentDiv = styled.div<MainContentDivProps>`
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
    background-image: ${({ backgroundUrl }) => `url(${backgroundUrl})`};
`;

export const MovieBaseInfo = styled.div`
    display:flex;
    flex-direction:column;
`;

export const MovieSynopsis = styled.div``;
