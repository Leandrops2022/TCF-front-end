import { createGlobalStyle, keyframes } from "styled-components";
import RobotoFont from "../../assets/fonts/Roboto/Roboto-Medium.ttf";

export const GlobalStyles = createGlobalStyle`
    @font-face {
    font-family: 'Roboto';
    src: url(${RobotoFont}) format('truetype');
    font-weight: 400;
    font-style: normal;
  }

  :root {
    --font-family: 'Roboto', sans-serif;
    --primary-color: #2F3437;
    --secondary-color: rgb(126, 17, 17);;
    --third-color: #c5c5c5;
    --fourth-color:#25190d;
    --font-size-large: 2em;
    --font-size-medium: 1.5em;
    --font-size-small: 1em;
    --primary-text-color:#c5c5c5;

    --button-backgroundColor: #6387CF;

    --links-PrimaryColor: rgb(156 163 175);
    --links-secondaryColor: #c5c5c5;

    --default-red: #AD2C2B;
    --default-error: rgb(252, 63, 63);
    --default-sucess: rgb(54, 196, 54);
    --background-color: #0f1819;
  }

    body {
        font-family: 'Roboto', sans-serif;
        color: var(--primary-text-color);
        background-color: var(--background-color);
    }

    p{
      line-height:1.1rem;
      padding: .3rem 0; 
    }

    h1 {
      font-size:2rem;
      @media screen and (max-width:900px) {
        font-size:1.5rem;

      }
    }

    h2{
      font-size:1.8rem;
      @media screen and (max-width:900px) {
        font-size:1.4rem;

      }
    }

    h3 {
      font-size:1.6rem;
      padding: 1rem 0;
      @media screen and (max-width:900px) {
        font-size:1.3rem;
      }
    }

    

`

export const pulseAnimation = keyframes`
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

export const shimmerAnimation = keyframes`
  0% {
    background-position: -200px 0;
  }
  100% {
    background-position: 200px 0;
  }
`;
