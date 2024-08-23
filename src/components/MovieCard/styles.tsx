import { Link } from "react-router-dom";
import styled from "styled-components";

export const Styledlink = styled(Link)`
  color:silver;
  text-decoration:none;
  width:100%
`

export const MovieItem = styled.div`
  position: relative;
  padding: 0;
  margin-bottom: 1.5rem;
  height: fit-content;
  background-image: url('https://top100filmes.com.br/assets/imagens-mobile/cardFilmeUsarMaior.svg');
  background-size: cover;
  background-repeat: no-repeat;
  background-color: rgba(80, 79, 79, 0.7);
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  border-radius: 8px;
  box-shadow: 2px 2px 2px black;
  font-family: 'Roboto', sans-serif;
  transition: opacity 0.5s, transform 0.5s;
  z-index: 1;
  
  &:hover {
    cursor: pointer;
  }
  @media screen and (max-width: 1000px) {
    width:100%;
  }
`;

// Container for content within MovieItem
export const MainContainer = styled.div`
  position: relative;
  padding: 1.1rem 0.5rem 0.5rem 0;
  margin-bottom: 1.5rem;
  width: 100%;
  height: 250px;
  display: flex;
  flex-direction: row;
  font-family: 'Roboto', sans-serif;
  z-index: 1;

`;

export const InnerContent = styled.div`
  width:100%;
  display: flex;
  flex-direction:row;
  padding: 2.5rem 0.5rem;
  
  @media screen and (max-width: 1000px) {
    padding: 1.4rem 0.5rem;

  }
`;

// Poster image in MovieItem
export const MoviePoster = styled.img`
  background-color: gray;
  width: 12vw;
  border-radius: 8px;
  box-shadow: 2px 2px 10px;
  margin-bottom: 0.1rem;
  @media screen and (max-width:1000px) {
        width:auto;
        height: 100%;
      }
`;

// Text content area in MovieItem
export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  padding: 0.5rem;
  box-sizing: border-box;
  text-align: center;
  width: 80%;
  height: 100%;
  line-height: 5vh;
  overflow: hidden;

`;

// Ranking and rating section
export const RankingAndRating = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top:2rem;
  font-family: 'Roboto', sans-serif;
  @media screen and (max-width: 1000px){
    font-size:1rem;
    margin-top:0rem;

  }
`;

// Title, year, and duration section
export const TitleReleaseDuration = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
@media screen and (max-width: 1000px) {
  line-height:15px;
  gap:0.8rem;
}
`;

export const StyledH2 = styled.h2`
  margin:0;
  @media screen and (max-width: 1000px) {
    font-size: 1.3rem
  }
`;

export const StyledH3 = styled.h3`
  margin:0;
  font-size:1.3rem;
  padding:0;
  @media screen and (max-width: 1000px) {
    font-size: 1.1rem;
    line-height:1.1rem;
  }
`;

export const StyledH5 = styled.h5`
  margin:0;
  font-size: 0.9rem;
  padding:0;
`;

// "Assisted" SVG icon
export const Assistido = styled.svg`
  position: fixed;
  bottom: 20px;
  right: 5px;
  width: 35px;
  height: 35px;
`;

// Add movie button
export const BotaoAdicionaFilmeNaLista = styled.button`
  position: fixed;
  top: 20px;
  right: 5px;
  border: none;
  z-index: 9999;
`;

// Cover image
export const CoverDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CoverImg = styled.img`
  width: 100%;
  height: auto;
`;

// Pagination container
export const PaginationDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
`;

// Text content
export const TextContentDiv = styled.div`
  margin: 1rem 0;
`;
