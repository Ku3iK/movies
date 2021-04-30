import React, { useState, useEffect } from 'react';
import theme from './themes/theme';
import GlobalStyle from './themes/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import axios from 'axios';
import Navigation from './components/Navigation/Navigation';
import MoviesLibrary from './components/MoviesLibrary/MoviesLibrary';
import MovieContext from './Contexts/MovieContext';

const App = () => {
  const [moviesList, setMoviesList] = useState([]);

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_TMDB_TOKEN}`)
      .then(response => {
        setMoviesList(response.data.results);
      })
      .catch(err => {
        console.log(err);
      })
  }, []);

  return (
    <MovieContext.Provider value={moviesList}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <GlobalStyle />
          <Navigation />
          <main>
            <Switch>
              <Route path='/' exact component={MoviesLibrary} />  
            </Switch>          
          </main>
        </BrowserRouter>
      </ThemeProvider>
    </MovieContext.Provider>
  );
}

export default App;
