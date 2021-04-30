import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const MovieDetails = ({ id, title, img, voteAverage, aboutMovie, releaseDate, originalLanguage, handleHideMovie }) => {
    const libraryOfImgUrl = "https://image.tmdb.org/t/p/w500/";

    return(
        <SingleMovieDetail>
            <button onClick={() => handleHideMovie()}>close</button>
            <div>
                <div>
                    <img src={`${libraryOfImgUrl}${img}`} alt=""/>
                </div>
                <div>
                    <h3>{title}</h3>
                    <p>Relase date: {releaseDate}</p>
                    <p>Original language: {originalLanguage}</p>
                    <p>IMBd: <span>{voteAverage}  <FontAwesomeIcon icon='star'/></span></p>
                    <p>{aboutMovie}</p>
                </div>
            </div>
        </SingleMovieDetail>
    );
}

export default MovieDetails;

const SingleMovieDetail = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 2rem 2rem;
    margin: 2rem;
    max-height: 90vh;
    background-color: ${({ theme }) => theme.color.primary};
    border: .2rem solid ${({ theme }) => theme.color.secondary};
    border-radius: 2.5rem;
    color: ${({ theme }) => theme.color.white};
    overflow-y: auto;
    @media(min-width: ${({ theme }) => theme.breakpoints.tablets}) {
        flex-direction: row;
        width: 80%;
        margin: 2rem auto;
        div {
            margin: 2rem;
            div {
                margin: 0;
            }
        }
    }
    @media(min-width: ${({ theme }) => theme.breakpoints.smallDesktop}) {
        width: 60%;
    }
    @media(min-width: ${({ theme }) => theme.breakpoints.largerDesktops}) {
        width: 35%;
    }
    button {
        align-self: flex-end;
        @media(min-width: ${({ theme }) => theme.breakpoints.tablets}) {
            order: 2;
            align-self: flex-start;
        }
    }
    img {
        border-radius: 2.5rem;
        width: 100%;
        @media(min-width: ${({ theme }) => theme.breakpoints.portraitTablets}) {
            width: 80%;
        }
        @media(min-width: ${({ theme }) => theme.breakpoints.tablets}) {
            width: 100%;
        }
    }
    h3, p {
        padding: 1rem 0;
    }
    h3 {
        color: ${({ theme }) => theme.color.secondary};
        font-weight: ${({ theme }) => theme.font.bold};
        font-size: ${({ theme }) => theme.font.s};
        letter-spacing: .2rem;
        border-bottom: .2rem solid ${({ theme }) => theme.color.black};
        @media(min-width: ${({ theme }) => theme.breakpoints.portraitTablets}) {
            font-size: ${({ theme }) => theme.font.m};
        }
        @media(min-width: ${({ theme }) => theme.breakpoints.smallDesktop}) {
            font-size: ${({ theme }) => theme.font.l};
        }
    }
    p {
        letter-spacing: .1rem;
        font-size: ${({ theme }) => theme.font.xs};
        @media(min-width: ${({ theme }) => theme.breakpoints.smallDesktop}) {
            font-size: ${({ theme }) => theme.font.s};
        }
        :nth-of-type(1),
        :nth-of-type(2) {
            font-size: ${({ theme }) => theme.font.xs};
            padding: .5rem 0;
        }
    }

`;