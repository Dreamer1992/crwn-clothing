import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }
  
    body {
        font-family: 'Open Sans Condensed', sans-serif;
        padding: 20px 60px;
        min-height: 100vh;

        @media screen and (max-width: 800px) {
            padding: 10px;
        }
    }

    a {
        color: #000;
        text-decoration: none;
    }
  
`;

export default GlobalStyle;
