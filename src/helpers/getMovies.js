export function getMovies() {
    return fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_TMDB_TOKEN}`)
        .then(data => data.json());
};