import { createGlobalStyle } from 'styled-components'

import fonts from './shared/fonts'

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 10px;
  }

  h1 {
    font-size: 3.6rem;
    line-height: 4.2rem;
    font-weight: 700;
    font-family: ${fonts.roboto};
  }

  h2 {
    font-size: 2.7rem;
    line-height: 3.2rem;
    font-weight: 500;
    margin: 0;
    font-family: ${fonts.roboto};
  }

  h3 {
    font-size: 2.2rem;
    line-height: 2.8rem;
    font-weight: 500;
    margin: 0;
    font-family: ${fonts.roboto};
  }

  h4 {
    font-size: 1.8rem;
    line-height: 2.1rem;
    font-weight: 500;
    margin: 0;
    font-family: ${fonts.roboto};
  }
  
  body {
    font-size: 1.6rem;
    line-height: 2.8rem;
    font-weight: 400;
    font-family: ${fonts.roboto};

  }

  a {
    font-family: ${fonts.roboto};
    font-weight: 500;
    text-decoration: none;
    display: inline-block;
    transition: all 0.2s ease-out;
  }
`

export default GlobalStyle
