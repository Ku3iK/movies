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

    *:focus {
        outline: 2px solid ${({ theme }) => theme.color.secondary};
    }
        
    body {
        font-size: 1.6rem;
        font-family: ${({ theme }) => theme.font.name};
        background-color: ${({ theme }) => theme.color.primary};
        color: ${({ theme }) => theme.color.text};
        overflow-x: hidden;
    }

    html {
        font-size: 62.5%;
    }
    
`

export default GlobalStyle