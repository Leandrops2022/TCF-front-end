import styled from "styled-components";

export const ModalDiv = styled.div`
    width: 98.9vw;
    height: 100vh;
    position: fixed;
    z-index: 999;
    top: 0;
    backdrop-filter: blur(15px); /* Apply blur to the modal */
    background: rgba(0, 0, 0, 0.1); /* Add a semi-transparent background to visualize the blur */
`;
export const StyledDialogBox = styled.div`
    padding: 2rem;
    color: silver;
    display:flex;
    width: 70%;
    margin:auto;
    background: linear-gradient(180deg, rgba(1,0,14,1) 1%, rgba(4,47,66,1) 78%, rgba(9,102,121,1) 100%);
    flex-direction: column;
    top:15%;
    z-index: 9999;
    border-radius: 6px;
    gap: 2rem;
    position:relative;
    border: 1px solid silver;
    @media screen and (max-width: 1000px){
        width:95%;
    }
   
`
export const ConfirmationButtonsDiv = styled.div`
    display: flex;
    gap: 2rem;
    justify-content: center;
`;

export const ConfirmationButton = styled.button`
    border-radius: 5px;
    padding: 1rem;
    border: none;
    background-color: whitesmoke;
    color: black;
`;

