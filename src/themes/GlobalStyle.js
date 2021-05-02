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

    ::-webkit-scrollbar {
        width: 1rem;
        height: .5rem;
    }
    ::-webkit-scrollbar-thumb {
        background: linear-gradient(13deg, #14213d 14%,#fca311 64%);
        border-radius: 1.5rem;
        :hover{
            background: linear-gradient(13deg, #FCA311 14%,#fca311 64%);
        }
    }
    ::-webkit-scrollbar-track{
        background: ${({ theme }) => theme.color.white};
        border-radius: 1rem;
        box-shadow: inset .7rem 1rem 1.2rem transparent;
    }

    input {
        background-color: ${({ theme }) => theme.color.primary};
        border: .2rem solid ${({ theme }) => theme.color.secondary};
        font-size: ${({ theme }) => theme.font.xs};
        color: ${({ theme }) => theme.color.secondary};
        border-radius: 2.5rem;        
        margin: 2rem;
        padding: 1rem 3rem;
        ::placeholder {
            color: ${({ theme }) => theme.color.white};
            opacity: .5;
        }
        @media(min-width: ${({ theme }) => theme.breakpoints.mobile}) {
            font-size: ${({ theme }) => theme.font.s};
            margin: 2rem 4rem;
        }
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
        margin: 2rem 0;
        padding: .5rem 1.5rem;
        background-color: transparent;
        border: .2rem solid ${({ theme }) => theme.color.secondary};
        color: ${({ theme }) => theme.color.white};
        font-size: ${({ theme }) => theme.font.xs};
        transition: .3s;
        cursor: pointer;
        :hover {
            background-color: ${({ theme }) => theme.color.secondary};
        }
    }

    .inactive {
        position: relative;
        overflow-y: hidden;
        touch-action: none;
        -ms-touch-action: none;
        background-color: rgba(0, 0, 0, .5);
    }

    span {
        color: ${({ theme }) => theme.color.secondary};
        font-weight: ${({ theme }) => theme.font.bold};
    }
    
`

export default GlobalStyle