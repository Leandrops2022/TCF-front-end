import styled from "styled-components";
import { pulseAnimation, shimmerAnimation } from "../GlobalStyle/GlobalStyle";

export const MainArticleDiv = styled.div`
    display: flex;
    flex-direction: column;
    grid-row-gap: 0;
    min-height:100vh;
    height: fit-content;
    position:relative;
    width: 95vw;
    margin: 1rem auto;
    @media screen and (max-width: 900px){
        padding:0;
        display: flex;
        flex-direction: column;
        width: 99%;
        margin: 1rem 0;
    }
`;

export const StyledSideDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content: center;
    padding: 0;
    /* background-color: rgba(255,255,255,0.1); */
    height:fit-content;
`;

export const StyledSideTitle = styled.p`
    font-size:1.1rem;
    padding: 1rem;
`;

export const ArticleContentDiv = styled.div`
    display: flex;
    flex-direction:column;
    gap:1rem;
    margin-bottom: 2rem;
    position:relative;
`;

export const ArticleSkeletonDiv = styled.div`
    display: flex;
    flex-direction:column;
    gap:1rem;
    margin-bottom: 2rem;

    height: 80vh;
    width: 100%;
    background: #f0f0f0; 
    background-image: linear-gradient(to right, #f0f0f0 0%, #e0e0e0 20%, #f0f0f0 40%); 
    background-size: 200px 100%; 
    border-radius: 4px;
    animation: ${pulseAnimation} 1.7s infinite alternate, ${shimmerAnimation} 1.7s ease-in-out infinite; 
    border-left: 2px solid #f0f0f0;
    position:relative;

  @media screen and (max-width: 900px) {
    margin: auto;
    width: 95%;
    height: 60vh;
  }
`;

export const ArticleCoverImage = styled.img`
    width:100%;
    border-radius: 5px;

`;

export const Container = styled.div`
  width: 100%;

`;

export const Content = styled.div`
  img {
    max-width: 100%;
    height: auto;
    
  }
`;