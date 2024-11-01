import styled from "styled-components"

export const Container = styled.div`
      position: fixed;
      bottom: 0;
      left: 0;
      width: 100%;
      background-color: white;
      color: black;
      padding: 3rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      z-index: 10000;
      position:fixed;
      bottom:0;
      @media screen and (max-width: 1000px) {
        padding: 1.5rem;
    }
    `;
export const Message = styled.p`
    margin: 0;
    font-size: 14px;
    flex: 1;
    text-align: center;
    @media screen and (max-width: 1000px) {
        text-align:left;
    }
`;

export const Button = styled.button`
    background-color: #4CAF50;
    color: #fff;
    padding: 10px 20px;
    border: none;
    cursor: pointer;
`;
