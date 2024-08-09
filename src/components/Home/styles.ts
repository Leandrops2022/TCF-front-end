import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledMainDiv = styled.div`
    display: flex;
    flex-direction:column;
    height:auto;
    width: 100%
`;

export const MidContentDiv = styled.div`
    display: flex;
    flex-direction:row;
    margin:2rem 0;
    gap:1rem;
    justify-content:space-around;
    height:auto;
    width: 100%;
`;

export const StyledLink = styled(Link)`
    text-decoration:none;
    color:silver;
`