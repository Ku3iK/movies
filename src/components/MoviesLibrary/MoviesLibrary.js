import React from 'react';
import styled from 'styled-components';
import MovieContext from '../../Contexts/MovieContext';
import Movie from './Movie'

const MoviesLibrary = () => {

    return(
        <MovieContext.Consumer>
            {value => {
                return(
                    <>
                        <h2>Most popular movies</h2>
                        <MoviesContainer>
                            {value.map(el => {
                                return <Movie key={el.id} id={el.id} title={el.title} background={el.backdrop_path} voteAverage={el.vote_average}/>
                            })}
                        </MoviesContainer>
                    </>
                );
            }}
        </MovieContext.Consumer> 
    );
}

export default MoviesLibrary;

const MoviesContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    flex-wrap: wrap;
    @media(min-width: ${({ theme }) => theme.breakpoints.tablets}) {
        flex-direction: row;
    }
    .popup {
        display: flex;
        flex-direction: column;
        justify-content: center;
        position: absolute;
        top: .1rem;
        left: 0;
        width: 100%;
        height: 100vh;
        overflow: hidden;
        z-index: 99;
        background-color: rgba(0, 0, 0, .1);
    }
`;