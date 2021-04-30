import React, { useState } from 'react';
import styled from 'styled-components';
import MovieContext from '../../Contexts/MovieContext';
import Movie from './Movie'
import MovieDetails from './MovieDetails';

const MoviesLibrary = () => {

    const [propertiesOfMovie, toggleMovie] = useState({
        isVisible: false,
        movieId: null,
    });

    const handleShowMovie = id => {
        const body = document.querySelector('body');
        toggleMovie({...propertiesOfMovie, isVisible: true, movieId: id});
        body.classList.add('inactive');
        window.scroll(0,0);
    };

    const handleHideMovie = () => {
        toggleMovie({...propertiesOfMovie, isVisible: false, movieId: null});
        document.querySelector('body').classList.remove('inactive');
    };

    return(
        <MovieContext.Consumer>
            {value => {
                const currentMovieData = value.filter(el => el.id === propertiesOfMovie.movieId)[0] || null;
                return(
                    <>
                        <h2>Most popular movies</h2>
                        <MoviesContainer className="moviesContainer">
                            {value.map(el => {
                                return <Movie 
                                    key={el.id}
                                    id={el.id}
                                    title={el.title}
                                    background={el.backdrop_path}
                                    voteAverage={el.vote_average}
                                    handleShowMovie={handleShowMovie} 
                                />
                            })}
                            {propertiesOfMovie.isVisible && currentMovieData ? (
                                <div className="popup">
                                    <div>
                                        <MovieDetails 
                                            key={currentMovieData.id} 
                                            id={currentMovieData.id}
                                            title={currentMovieData.title}
                                            img={currentMovieData.backdrop_path}
                                            voteAverage={currentMovieData.vote_average}
                                            aboutMovie={currentMovieData.overview}
                                            releaseDate={currentMovieData.release_date}
                                            originalLanguage={currentMovieData.original_language}
                                            handleHideMovie={handleHideMovie}
                                        />
                                    </div>
                                </div>
                            ): null}
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