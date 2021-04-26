import React, { Component } from 'react';
import styled from 'styled-components';
import NavigationElement from './NavigationElement';

class Navigation extends Component {
    state = {
        isClicked: false,
    }

    handleHamburgerClick= () => {
        this.setState({ isClicked: !this.state.isClicked });
    }

    render() {
        return(
            <NavigationContainer>
                <button onClick={this.handleHamburgerClick} className={this.state.isClicked ? 'clicked' : null}>
                    <div></div>
                    <div></div>
                </button>
                <div className={this.state.isClicked ? 'showNav' : null}>
                    <NavigationElement to='/' title='Main page' />
                    <NavigationElement to='/favouriteMovies' title='Favourite movies' />
                </div>
            </NavigationContainer>
        );
    }
}

export default Navigation;

const NavigationContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 0 auto;
    padding: 30px 0;
    background-color: ${({ theme }) => theme.color.primary};
    border-bottom: .5rem solid ${({ theme }) => theme.color.secondary};
    button {
        align-self: flex-end;
        position: relative;
        width: 30px;
        height: 15px;
        margin: 1rem 3rem;
        z-index: 3;
        cursor: pointer;
        & div {
            position: absolute;
            background-color: ${({ theme }) => theme.color.secondary};
            width: 100%;
            height: 3px;
            &:nth-child(1){ top: 0}
            &:nth-child(2){ bottom: 0}
        }
        &.clicked div {
            &:nth-child(1) { animation: topLine 1s ease both }
            &:nth-child(2) {animation: bottomLine 1s ease both}
        }
        @media(min-width: ${({ theme }) => theme.breakpoints.tablets}){
            display: none;
        }

        @keyframes topLine {
            0% {
                transform: translateY(0);
                top: 0;
            }
            20% {
                top: 50%;
                transform: translateY(-50%);
            }
            100% {
                    transform: translateY(-50%) rotate(45deg);
                    transform-origin: center;
                    top: 50%;
            }
        }
        @keyframes bottomLine {
            0% {
                transform: translateY(0);
                bottom: 0;
            }
            20% {
                bottom: 50%;
                transform: translateY(50%);
            }
            100% {
                transform: translateY(50%) rotate(-45deg);
                bottom: 50%;
                transform-origin: center;
            }
        }
    }

    & > div {
        display: none;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 0 auto;
        width: 100%;
        max-width: 1600px;
        &.showNav {
            display: flex;
        }
        @media(min-width: ${({ theme }) => theme.breakpoints.tablets}){
            display: flex;
            flex-direction: row;
            justify-content: flex-end;
        }
        & p {
            margin: 0 2rem;
            padding: 1.5rem;
            transition: .3s;
            border-bottom: .1rem solid transparent;
            text-transform: lowercase;
            cursor: pointer;
            :hover {
                border-color: ${({ theme }) => theme.color.secondary};
            }
        }
    }
`;
