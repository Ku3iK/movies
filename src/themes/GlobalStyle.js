import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *,*::before,*::after {
        box-sizing: border-box;
    }
    
    * {
        padding: 0;
        margin: 0;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
        
    body {
        font-size: 1.6rem;
        font-family: ${({ theme }) => theme.font.name};
        background-color: ${({ theme }) => theme.color.white};
        color: ${({ theme }) => theme.color.white};
        overflow-x: hidden;
    }

    html {
        font-size: 62.5%;
    }

    main {
        max-width: 1600px;
        margin: 0 auto;
    }

    a {
        font-size: 1.8rem;
        text-decoration: none;
        color: ${({ theme }) => theme.color.secondary};
    }

    button {
        background-color: transparent;
        border: none;
    }
    
`

export default GlobalStyle