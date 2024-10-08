import styled from "styled-components";

export const MainContainer = styled.div`
    display:flex;
    flex-direction:column;
    background-color: black;
    padding:3rem;
    min-height:3rem;
    color: silver;
    align-items:center;
    justify-content:center;
    text-align:center;
    margin-top:2rem;
    @media screen and (max-width: 1000px) {
       padding: 1rem;
    }
`;

export const LegalLinks = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom:1rem;
`;

export const StyledUl = styled.ul`
    display:flex;
    gap:1rem;
`

export const StyledP = styled.p`
    font-size: 0.9rem;
`;

export const StyledSpan = styled.span`
    font-size: 0.8rem;
    margin-bottom:1rem;

`
export const MainContentDiv = styled.div`
    display:flex;
    flex-direction: column;
    gap:0.5rem;
`;
