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

    h2 {
        text-transform: lowercase;
        font-size: ${({ theme }) => theme.font.s};
        color: ${({ theme }) => theme.color.primary};
        margin: 2rem;
        padding: 0 2rem;
        @media(min-width: ${({ theme }) => theme.breakpoints.mobile}) {
            font-size: ${({ theme }) => theme.font.m};
        }
        @media(min-width: ${({ theme }) => theme.breakpoints.portraitTablets}) {
            font-size: ${({ theme }) => theme.font.l};
        }
        @media(min-width: ${({ theme }) => theme.breakpoints.smallDesktop}) {
            font-size: ${({ theme }) => theme.font.xl};
        } 
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