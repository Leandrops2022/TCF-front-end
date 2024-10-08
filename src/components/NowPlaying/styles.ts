import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";

export const StyledSwiper = styled(Swiper)`
    height:fit-content;
    width:100%;
    border-top: 1px solid black;
    border-right: 1px solid black;
    border-bottom: 1px solid silver;
    border-left: 2px solid silver;
    border-radius: 5px;

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
`;

export const StyledSwiperSlide = styled(SwiperSlide)`
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    height: 400px;
    width: fit-content;
    align-items: center;
    position: relative;
    background-color: rgba(192, 192, 192,0);
`;

export const StyledMoviePoster = styled.img`
    height:100%;
`;

export const StyledMovieTitleDiv = styled.div`
    display: flex;
    position: absolute;
    bottom:1rem;
    color: white;
    font-size: 1.2rem;
    text-shadow: 1px 1px 1px black;
`;