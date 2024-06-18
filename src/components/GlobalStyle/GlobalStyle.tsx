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
    --secondary-color: rgb(126, 17, 17);;
    --third-color: white;
    --fourth-color:#25190d;
    --font-size-large: 2em;
    --font-size-medium: 1.5em;
    --font-size-small: 1em;
    --primary-text-color:#EED63B;

    --button-backgroundColor: #6387CF;

    --links-PrimaryColor: rgb(156 163 175);
    --links-secondaryColor: white;

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

`