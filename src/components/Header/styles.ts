import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledHeader = styled.header`
    background-color: black;
    width: auto;
    height:fit-content;
    padding: 0.8rem 0.5rem;
    display:grid;
    grid-template-columns: 1fr 13fr 1fr;
    position: relative;

    @media screen and (max-width: 900px) {
        display:block;
        width:100%;
        grid-template-columns: 1fr;
        grid-template-rows: repeat(3,1fr);
        padding: 0.8rem 0.5rem 0 0.5rem;
    }
`;

export const StyledLogoDiv = styled.div`
    @media (max-width: 900px) {
        display:flex;
        flex-direction:row;
        margin-left: 2rem;
        width:45vw;

    }
    @media screen and (max-width: 600px) {
        width:45vw;
    }

    @media screen and (min-width: 601px) and (max-width: 900px) {
        width:40vw;
    }

    @media screen and (min-width: 901px) {
        width:15vw;
    }
`;

export const StyledLogo = styled.img`

    @media screen and (max-width: 600px) {
        width:45vw;
    }

    @media screen and (min-width: 601px) and (max-width: 900px) {
        width:40vw;
    }

    @media screen and (min-width: 901px) {
        width:15vw;
    }
`;

export const StyledSearchDiv = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:flex-end;
    padding-bottom:0.2rem;
    position:relative;
    overflow-y:visible;
    @media screen and (max-width:900px) {
      padding: 1rem 0 0.2rem 0;
    }
`;

export const StyledMenuDiv = styled.div`
    background-color: black;
    display: flex;
    flex-direction: column;
    gap: .5rem;
    color: white;
    position: relative;
    

    @media screen and (max-width:900px) {
        position: absolute;
        top:0;
        right:0;
    }
`;

export const StyledBlackSeparator = styled.div`
    display:flex;
    flex-direction:column;
    list-style:none;
    z-index:9999;  
    background-color:black;
    height: 100%;
    padding: 1rem 0;
    width: 21vw;
    position:fixed;
    right:0;
    border-radius: 0 0 0 10px;

    @media screen and (max-width:900px) {
        width:100%;
        padding: 0;
        height: 100%;
        min-width: 98%;
        position:absolute;
        left:0;
        right:unset;

    }
`;
export const StyledCloseButton = styled.button`
    background-color:transparent;
    padding:0;
    border: none;
    color:#BA4947;
    font-size: 1.1rem;
    font-weight: bolder;
    position: fixed;
    right:1.5rem;
    top: 1.5rem;
    &:hover {
        cursor: pointer;
    }
    @media screen and (max-width: 900px) {
        right:2rem;
        top: 1rem;
        position: absolute;
        z-index:99999999;
    }
`;

export const StyledMenuList = styled.ul`
    display: flex;
    flex-direction:column;
    background-color:#181818;
    border-radius: 8px;
    width:95%;
    height: fit-content;
    justify-self:center;
    box-sizing: border-box;
    padding: 1rem;
    margin:0 auto 0 auto;
    border-bottom: 2px solid gray;
    border-right: 1px solid gray;
    
    @media screen and (max-width:900px) {
        width:99%;
        padding:2rem;
        box-sizing:border-box;
        align-items: flex-start;
        height: 99.9%;
        min-width: 98%;
        position:absolute;
        left:0;
        right:unset;
        margin:0 auto 0 auto;
    }
`;

export const StyledMenuItem = styled.li`
   padding: 0 0;
   display:flex;
   justify-content:flex-start;
   border-radius:5px;
   &:hover {
    background-color: gray
   }
   width: 100%
`;

export const StyledP = styled.p`
    color: var(--primary-text-color);
    font-size:1.2rem;
    text-align: left;
`;

export const StyledMenuButtonDiv = styled.div`
    display: flex;
    justify-content:center;
    height: fit-content;
    width:fit-content;
    padding: .5rem;
    @media (max-width: 900px) {
        display:flex;
        flex-direction:row;
    }
`;

export const StyledButton = styled.button`
    width:2vw;
    background-color:transparent;
    align-self: center;
    border-radius:8px;

    &:hover {
        cursor: pointer;
    }
    &:active {
        box-shadow: inset -2px -2px 4px black;
    }
    @media (max-width: 900px) {
        width:35px;
        height:35px;
        border:none;
        align-self:center;
        
    }
`;

export const StyledLink = styled(Link)`
    text-decoration: none;
    display:flex;
    gap:1rem;
    align-items: center;
    justify-content:flex-start;
    width:100%;
    padding:0.8rem;
`;

export const StyledIcon = styled.img`
    width:20px;
    height:20px;
`;

