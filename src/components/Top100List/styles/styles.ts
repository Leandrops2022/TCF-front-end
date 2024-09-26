import styled from "styled-components";



export const AllTop100Div = styled.div`
    background-color: var(--background-color);
    width: 82vw;
    margin:auto;
    border:1px solid red;
    text-align:center;
   
   
`

export const Top100List = styled.div `
     display:grid;
     grid-template-columns: repeat(4, 1fr);
     border:1px solid green;
     @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr;
    }

`
