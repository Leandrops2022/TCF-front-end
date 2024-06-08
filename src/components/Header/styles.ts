import styled from "styled-components";

export const StyledHeader = styled.header`
    background-color: black;
    width:100%;
    height:15vh;
    display:grid;
    grid-template-columns: 1fr 3fr 1fr;

    @media (max-width: 480px) {
        background-color: green;
        padding: 10px;
    }
`;

export const StyledLogoDiv = styled.div`
       border:1px solid red;
       overflow-y:hidden;

`;

export const StyledSearchDiv = styled.div`
    border:1px solid red;
    overflow-y:hidden;

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
    position:absolute;
    background-color:black;
    min-width:100%;
    width: fit-content;
    top: 15vh;
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
    border:1px solid red;
    justify-content:flex-end;
    height: 100%;
    padding: .5rem;
`;

export const StyledButton = styled.button`
    height:10vh;
    width:5vw;
    align-self: center;
    border-radius:8px;
    &:hover {
        cursor: pointer;
    }
    &:active {
        box-shadow: inset -2px -2px 4px black;
    }
`;