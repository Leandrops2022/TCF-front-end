import styled from "styled-components";

export const StyledHeader = styled.header`
    background-color: black;
    width: 98.8%;
    height:fit-content;
    padding: 0.8rem 0.5rem;
    display:grid;
    grid-template-columns: 1fr 13fr 1fr;

`;

export const StyledLogoDiv = styled.div`
    width:fit-content;
    @media (max-width: 900px) {
        display:flex;
        flex-direction:row;
        width:100px;
    }
`;

export const StyledSearchDiv = styled.div`
    overflow-y:hidden;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:flex-end;
    padding-bottom:0.3rem;
`;

export const StyledMenuDiv = styled.div`
    background-color: black;
    display: flex;
    flex-direction: column;
    gap: .5rem;
    color: white;
    position: relative;
`;

export const StyledMenuList = styled.ul`
    display:flex;
    flex-direction:column;
    gap:1.5rem;
    list-style:none;
    display:none; 
    z-index:9999;  
    background-color:black;
    width: fit-content;
    padding:0 5rem;
    position:absolute;
    right:0;
    border-radius: 0 0 0 10px;
`;

export const StyledMenuItem = styled.li`
   padding: 1rem 0;
`;

export const StyledP = styled.p`
    color:yellow;
    text-align: left;
    margin-left: 4rem;
`;

export const StyledMenuButtonDiv = styled.div`
    display: flex;
    justify-content:flex-end;
    height: 100%;
    padding: .5rem;
    @media (max-width: 900px) {
        display:flex;
        flex-direction:row;
        width: 50px;
        padding:1rem;
    }
`;

export const StyledButton = styled.button`
   width:50px;
   height:50px;
    align-self: center;
    border-radius:8px;
    &:hover {
        cursor: pointer;
    }
    &:active {
        box-shadow: inset -2px -2px 4px black;
    }
    @media (max-width: 900px) {
        width:50px;
        height:50px;
        align-self:center;
    }
`;

export const StyledLogo = styled.img`
    height:100%;
    @media (max-width: 900px) {
        width:100px;
    }
`;
