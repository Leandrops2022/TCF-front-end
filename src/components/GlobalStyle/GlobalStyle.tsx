import { createGlobalStyle } from "styled-components";
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
    --secondary-color: #c6dbda;
    --third-color:#1d9992;
    --fourth-color:#25190d;
    --font-size-large: 2em;
    --font-size-medium: 1.5em;
    --font-size-small: 1em;
    --primary-text-color:#F6F6F3;
  }

    body {
        font-family: 'Roboto', sans-serif;
        color: var(--primary-text-color);
        background-color: var(--secondary-color);
    }

`