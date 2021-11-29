import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  /*----------- SETTINGS ----------*/
  :root {
    font-size: 60%;
    --font-mont: "Montserrat", Helvetica, sans-serif;
    --font-open: "Open Sans", Helvetica, sans-serif;
    --font-oswald: "Oswald", arial, helvetica, sans-serif;
    --font-lato: "Lato", Calibri, Arial, sans-serif;
    --font-poppins: "Poppins", sans-serif;
    --color-background: #f5f5f5;
  }

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    list-style: none;
    border: none;
    text-decoration: none;
  }
  *, ::after, ::before {
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    -webkit-tap-highlight-color: transparent;
    -webkit-box-sizing: border-box; /* Safari and Chrome */
    -moz-box-sizing: border-box; /* Firefox */
    -ms-box-sizing: border-box; /* IE 9 */
    -o-box-sizing: border-box; /* Opera */
    box-sizing: border-box;
  }
  ::after, ::before {
    white-space: pre-wrap;
  }

  ::-webkit-scrollbar {
    width: 6px !important;
    height: 6px !important;
  }
  ::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.1);
    border-radius: 6px;
  }
  ::-webkit-scrollbar-track {
    background: transparent;
  }

  body {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  html, body, #__next {
    height: 100%;
  }
  
  body {
    overflow: overlay;
  }

  body,
  input,
  button,
  textarea {
    font: 500 1.6rem var(--font-poppins);
  }
  
  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
  }
  input[type="radio"], input[type="checkbox"], input[type="file"] {
  display: none;
}
  
  button {
    cursor: pointer;
    background: transparent;
  }
  
  @media screen and (max-width: 720px) {
    :root {
      font-size: 50%;
    }
  }

  /* NOTE: Todos os css abaixo são aplicados fora do padrão */
  body {
    background: #f5f5f5;
  }

  @-webkit-keyframes treo-bouncedelay {
    0%,
    80%,
    100% {
      -webkit-transform: scale(0);
    }
    40% {
      -webkit-transform: scale(1);
    }
  }

  @keyframes treo-bouncedelay {
    0%,
    80%,
    100% {
      -webkit-transform: scale(0);
      transform: scale(0);
    }
    40% {
      -webkit-transform: scale(1);
      transform: scale(1);
    }
  }
`

export default GlobalStyle
