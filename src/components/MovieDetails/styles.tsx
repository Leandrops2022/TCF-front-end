import { Link } from "react-router-dom";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";


export const Container = styled.div`
    display:flex;
    flex-direction:column;
    justify-content: space-evenly;
    gap:1rem;
    width:90vw;
    padding-bottom:3rem;
    margin: auto;
    @media screen and (max-width: 1000px) {
        display: flex;
        flex-direction:column;
        width: 100%;

    }
`;

export const LoadingDiv = styled.div`
    min-height:100vh;
`

export const CardDiv = styled.div`
    display:flex;
    flex-direction:row;
    justify-content: space-evenly;
    .swiper-button-next,
    .swiper-button-prev {
    color: #cfa864; 
  
    }
    .swiper-pagination-bullet {
        background-color: #cfa864; /* Change bullet color */
    }

    .swiper-pagination-bullet-active {
        background-color: #d0b672; /* Change active bullet color */
    }
    @media screen and (max-width: 1000px) {
        display: flex;
        flex-direction:column;
    }
`;

export const CoverDiv = styled.div`
    display: flex;
    background-color: var(--primary-color);
    opacity:1;
    border-radius:8px;
    height: 60vh;
    border-left: 2px solid silver;
    border-bottom:1px solid silver;
    box-shadow: 8px 8px 20px black;
    width:fit-content;
    @media screen and (max-width: 1000px) {
        min-height:30vh;
        margin:auto;
        width: 90vw;
        align-items:center;
        justify-content:left;
        margin-bottom: 1rem;
    }
  
`;

export const StyledCover = styled.img`
    height: 99.9%;
    border-radius:8px;
    @media screen and (max-width: 1000px) {
       width: 100%;
    }
`

export const MainContentDiv = styled.div`
    display: flex;
    flex-direction: column;
    background: linear-gradient(
        to bottom,
        rgba(1, 28, 44, 0.5), /* Darker color at the top */
        rgba(1, 28, 44, 0.3), /* Lighter color in the middle */
        rgba(1, 28, 44, 0.178) /* Lightest color at the bottom */
        );
    opacity:1;
    border-radius:8px;
    min-height:100%;
    width:70vw;
    border-left: 2px solid silver;
    border-bottom:1px solid silver;
    box-shadow: 8px 8px 20px black;
    @media screen and (max-width: 1000px) {
      width:100%;
      font-size: 1rem;
    }
`
export const MovieInfoDiv = styled.div`
    height:80%;
    overflow-y:scroll;
       /* Hide scrollbar for Webkit browsers */
       &::-webkit-scrollbar {
        display: none; /* Safari and Chrome */
    }

    /* Hide scrollbar for Firefox */
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* Internet Explorer and Edge */
    
`;

export const MovieTitle = styled.h1`
    text-align:left;
    padding:0.6rem 2rem;
    text-align:center;
    color:silver;
    @media screen and (max-width: 1000px) {
        font-size:1.2rem;
    }
    
`;

export const MovieGenres = styled.p`
    text-align:left;
    padding: 0.5rem 2rem;
    text-align:center;
    color:silver;
    font-size:1.2rem;
`;

export const MovieSynopsis = styled.p`
    text-align:left;
    padding: 1rem 1rem;
    text-align:left;
    color:silver;
    font-size:1rem;
    line-height:1.4rem;
    @media screen and (max-width: 1000px) {
        font-size:1rem;
    }
`;

export const AdditionalInfoDiv = styled.div`
    display: flex;
    flex-direction:row;
    justify-content:space-between;
    width: 100%;
    height:8vw;
    @media screen and (max-width: 1000px) {
        flex-direction: column;
        height:fit-content;
    }
`;

export const CastDiv = styled.div`
    width: 49%;
    height:100%;
    border:2px solid silver;
    border-radius:6px;
  
    @media screen and (max-width: 1000px) {
        width:100%;
        padding:1rem;

    }
`;

export const WhereToWatchDiv = styled.div`
    border: 2px solid silver;
    border-radius: 6px;
    width: 49%;
    height:100%;
    text-align:center;
    background-color: rgba(192, 192, 192,0.2);

    @media screen and (max-width: 1000px) {
        width:100%;
        padding:1rem;
    }
`;
export const ProvidersDiv = styled.div`
    flex-grow: 1;
    display: flex;
    justify-content:center;
    gap: 0.5rem;
    grid-template-columns: repeat(3,1fr);
`;

export const ProviderImage = styled.img`
    max-height: 100%;
`

export const StyledSwiper = styled(Swiper)`
    height:40vh;
    width:100%;
    border-top: 1px solid black;
    border-right: 1px solid black;
    border-bottom: 1px solid silver;
    border-left: 2px solid silver;
    border-radius: 5px

`;


export const StyledIFrame = styled.iframe`
    width: 100%;
    max-width: 560px; 
    height: 100%;
    border:1px solid silver;
`;

export const StyledCastSwiper = styled(Swiper)`
    height: 100%;
    border-top: 1px solid black;
    border-right: 1px solid black;
    border-bottom: 1px solid silver;
    border-left: 2px solid silver;
    border-radius: 5px;
`;

export const CastSwiperSlide = styled(SwiperSlide)`
    display: flex;
    flex-shrink: 0;
    align-items: center;
    background-color: rgba(192, 192, 192,0.2);
`

export const StyledActorImage = styled.img`
    height:100%
`
export const StyledCastLegendDiv = styled.div`
    display:flex;
    flex-direction: column;
    align-self: flex-end;
    height:100%;
    flex-grow:1;
    align-items:flex-start;
    padding-left:0.5rem;
    justify-content: center;
`;

export const StyledLink = styled(Link)`
    text-decoration: none;
    height:100%;
    display:flex;
    width:100%;
    &:hover{
        cursor: pointer;
    }
`