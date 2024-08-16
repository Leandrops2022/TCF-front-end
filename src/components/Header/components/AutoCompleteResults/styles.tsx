import styled from "styled-components";


export const ResultsContainer = styled.div`
    background-color: whitesmoke;
    color: black;
    z-index: 9999;
    position: absolute; /* Change to absolute */
    line-height: 1.4rem;
    padding:0.2rem 0.8rem;
    width: 50%;
    height: fit-content;
    overflow-y: scroll;
    border-radius: 5px;
    top: 100%; /* Position it right below the search bar */
    @media screen and (max-width: 900px) {
        width: 80%;
        top: 100%;
    }
`;

