import styled, { keyframes } from "styled-components";

export const HighlightMainDiv = styled.div`
    display:grid;
    width:99%;
    grid-template-columns: repeat(var(--columns, 1), 1fr);
    grid-template-rows: repeat(var(--rows, 1), auto);
    height: fit-content;
    gap:1rem;
    grid-column-gap: 1rem;
    @media screen and (max-width: 900px) {
        height:fit-content;
        gap:1rem;
        border-radius: 8px;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: auto;
    }
`;


export const HilightItem = styled.div`
  height: fit-content;
  width: fit-content;
  background: transparent; 
  border-radius: 4px;
  border-left: 2px solid #f0f0f0;
  position:relative;
  &:hover {
    scale:1.1;
    z-index: 999;
    box-shadow: 5px 7px 15px black;
  }

  @media screen and (max-width: 900px) {
    width: 100%;
    height: fit-content;
  }
`;

export const HilightLegendDiv = styled.div`
  position: absolute;
  background-color: rgba(0,0,0,0.5);
  min-height: 5rem;
  height:fit-content;
  bottom:0;
  width: 100%;
  padding: .5rem;
  box-sizing: border-box;
  display: flex;
  align-items:center;
  @media screen and (max-width: 900px) {
    min-height: 2rem;
    height: fit-content;
  }
`;

export const HilightLegendText = styled.p`
    color:#F0F0F0F0;  
    font-size: 1rem;
    font-weight:thin;
    @media screen and (max-width: 900px) {
    font-size: .7rem;
  }        
`;

export const HighlightTag = styled.div`
  background-color: rgba(0,0,0,0.9);
  height:2rem;
  width: 4rem;
  position:absolute;
  top:0;
  right:0;
  display: flex;
  align-items: center;
  justify-content:center;
  @media screen and (max-width: 900px) {
    height:1.8rem;
    width: 3rem;
  }
`;

export const HighlightTagText = styled.span`
  color: var(--primary-yellow);
  font-size: 0.8rem;
  font-weight: thin;
  @media screen and (max-width: 900px) {
    font-size: .7rem;
  }
`;


const pulseAnimation = keyframes`
  0% {
    opacity: 0.2;
  }
  50% {
    opacity: 0.8;
  }
  100% {
    opacity: 0.2;
  }
`;

const shimmerAnimation = keyframes`
  0% {
    background-position: -200px 0;
  }
  100% {
    background-position: 200px 0;
  }
`;

export const SkeletonItem = styled.div`
  height: 300px;
  width: 20vw;
  background: #f0f0f0; 
  background-image: linear-gradient(to right, #f0f0f0 0%, #e0e0e0 20%, #f0f0f0 40%); 
  background-size: 200px 100%; 
  border-radius: 4px;
  animation: ${pulseAnimation} 1.7s infinite alternate, ${shimmerAnimation} 1.7s ease-in-out infinite; 
  border-left: 2px solid #f0f0f0;
  position:relative;

  @media screen and (max-width: 900px) {
    width: 40vw;
    height: 17vh;
  }
`;
