import { Link } from "react-router-dom";
import styled from "styled-components";


export const ResultsContainer = styled.div`
    background-color: whitesmoke;
    color: black;
    z-index: 9999;
    position: absolute; 
    line-height: 1rem;
    padding:0rem 0.8rem;
    width: 50%;
    max-height: 60vh;
    overflow-y: scroll;
    border-radius: 5px;
    top: 100%;
    @media screen and (max-width: 900px) {
        width: 80%;
        top: 100%;
    }
`;



