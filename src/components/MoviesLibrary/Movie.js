import React from 'react';
import styled from 'styled-components';

const Movie = ({ title, background, voteAverage }) => {
    const libraryOfImgUrl = "https://image.tmdb.org/t/p/w500/";

    return(
        <SingleMovie>
            <img src={`${libraryOfImgUrl}${background}`} alt=""/>
            <div>
                <h3>{title}</h3>
                <p>IMBd: <span>{voteAverage}</span></p>
            </div>
        </SingleMovie>
    );
}

export default Movie;

const SingleMovie = styled.div`
    position: relative;
    display: flex;
    align-items: flex-end;
    margin: 2rem auto;
    width: 90%;
    cursor: pointer;
    @media(min-width: ${({ theme }) => theme.breakpoints.portraitTablets}) {
        max-width: 80%;
    }
    @media(min-width: ${({ theme }) => theme.breakpoints.tablets}) {
        max-width: 45%;
    }
    @media(min-width: ${({ theme }) => theme.breakpoints.smallDesktop}) {
        max-width: 30%;
        margin: 2rem 0;
    }
    img {
        width: 100%;
        border-radius: 25px;
    }
    div {
        position: absolute;
        padding: 2rem;
        background-color: rgba(0, 0, 0, .5);
        width: 100%;
        z-index: 1;
        border-radius: 0 0 25px 25px;
        p {
            padding: .5rem 0 0;
            span {
                color: ${({ theme }) => theme.color.secondary};
                font-weight: ${({ theme }) => theme.font.bold};
            }
        }
    }
`;