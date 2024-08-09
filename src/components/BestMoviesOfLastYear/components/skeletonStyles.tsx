import styled, { keyframes } from "styled-components";

// Skeleton animation
const skeletonLoading = keyframes`
  0% {
    background-position: -200px 0;
  }
  100% {
    background-position: calc(200px + 100%) 0;
  }
`;

// Base skeleton component
const SkeletonBase = styled.div`
  background-color: #ccc;
  background-image: linear-gradient(90deg, #ccc, #e0e0e0, #ccc);
  background-size: 200px 100%;
  animation: ${skeletonLoading} 2.5s infinite linear;
`;

// Skeleton for MovieItem
export const SkeletonMovieItem = styled(SkeletonBase)`
  width: 80vw;
  height: fit-content;
  border-radius: 8px;
  margin-bottom: 1.5rem;

  @media screen and (max-width: 1000px) {
    width: 97vw;
  }
`;

// Skeleton for ContainerTodoConteudo
export const SkeletonContainerTodoConteudo = styled(SkeletonBase)`
  width: 100%;
  height: 250px;
  margin-bottom: 1.5rem;
`;

// Skeleton for InnerContent
export const SkeletonInnerContent = styled(SkeletonBase)`
  width: 100%;
  display: flex;
  flex-direction: row;
  padding: 2.5rem 0.5rem;
  gap: 1rem;
  @media screen and (max-width: 1000px) {
    padding: 1.4rem 0.5rem;
  }
`;

// Skeleton for FilmeItemPoster
export const SkeletonFilmeItemPoster = styled(SkeletonBase)`
  width: 12vw;
  height: 25vh;
  border-radius: 8px;
  margin-bottom: 0.1rem;
  border:1px solid silver;

  @media screen and (max-width: 1000px) {
    width: auto;
    height: 100%;
  }
`;

// Skeleton for FilmeItemTextos
export const SkeletonFilmeItemTextos = styled(SkeletonBase)`
  width: 80%;
  height: 100%;
  padding: 0.5rem;
  box-sizing: border-box;
  display:flex;
  flex-direction: column;
  gap:1rem;
`;

// Skeleton for RankingENota
export const SkeletonRankingENota = styled(SkeletonBase)`
  width: 100%;
  height: 15vh;
  
  @media screen and (max-width: 1000px) {
    height: 1rem;
  }
`;

// Skeleton for TituloAnoDuracao
export const SkeletonTituloAnoDuracao = styled(SkeletonBase)`
  width: 100%;
  height: 1.5rem;
`;

// Skeleton for Assistido icon
export const SkeletonAssistido = styled(SkeletonBase)`
  width: 35px;
  height: 35px;
`;

// Skeleton for BotaoAdicionaFilmeNaLista
export const SkeletonBotaoAdicionaFilmeNaLista = styled(SkeletonBase)`
  width: 35px;
  height: 35px;
`;

// Skeleton for CoverImg
export const SkeletonCoverImg = styled(SkeletonBase)`
  width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 1rem;
`;
