import styled from "styled-components";

export const ResultsContainer = styled.div`
    background-color:whitesmoke;
    color:black;
    z-index:9999;
    top:4.8rem;
    position:absolute;
    width: 50%;
    height:18rem;
    overflow-y:scroll;
    border-radius: 5px;
    @media screen and (max-width: 900px) {
        width:80%;
        top:3.2rem;
    }
`;