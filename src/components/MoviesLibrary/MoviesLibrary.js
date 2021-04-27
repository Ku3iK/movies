import React from 'react';
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

export default MoviesLibrary;export default MoviesLibrary;

const MoviesContainer = styled.div`
