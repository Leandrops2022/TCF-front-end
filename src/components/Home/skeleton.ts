import styled, { keyframes } from 'styled-components';

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
 

  @media screen and (max-width: 900px) {
    width: 100%;
    height: 20vh;
  }
`;
