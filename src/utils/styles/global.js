import { createGlobalStyle } from 'styled-components';
import '../../fonts/fonts.css';

export default createGlobalStyle`
    html {
      font-size: 62.5%; /* 1rem = 10px */
      box-sizing: border-box;
      line-height: 1.15;
      /* @media ${props => props.theme.mediaQueries.largest} {
          font-size: 60%;
      }
      @media ${props => props.theme.mediaQueries.large} {
          font-size: 57.5%;
      }
      @media ${props => props.theme.mediaQueries.small} {
          font-size: 55%;
      } */
    }
    * {
      outline: none;
      box-sizing: inherit;
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0) !important;
    }
    *,
    *::before,
    *::after {
      box-sizing: inherit;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
    ::selection {
        background: var(--primary-lighter); /* WebKit/Blink Browsers */
      }
    body {
      font-family: 'Source Sans Pro', 'sans-serif', "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", '!default';
      font-size: 2rem;
      margin: 0;
      width: 100%;
      height: 100%;
      overflow: visible;
      --primary: ${props => props.theme.colors.primaryMain};
      --primary-light: ${props => props.theme.colors.primaryLight};
      --primary-lighter: ${props => props.theme.colors.primaryLighter};
      --secondary: ${props => props.theme.colors.secondaryMain};
      --secondary-light: ${props => props.theme.colors.secondaryLight};
      --secondary-lighter: ${props => props.theme.colors.secondaryLighter};
      --navbar: rgba(255, 255, 255, 0.95);
      --text-light: ${props => props.theme.textLight};
      --white: #fff;
      --shadow-btn: rgba(7, 49, 69, .1);
      --shadow-color: rgba(0, 0, 0, 0.1);
    }
    form,
    input,
    textarea,
    button,
    select,
    a {
      -webkit-tap-highlight-color: rgba(0,0,0,0);
    }
`;