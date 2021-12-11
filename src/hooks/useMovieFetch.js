import { useEffect, useState } from "react";
import API from '../API';
// Helpers
import { isPersistedState } from '../helpers'


export function useMovieFetch(movieId) {
   const [state, setState] = useState({});
   const [loading, setLoading] = useState(true)
   const [error, setError] = useState(false)

   useEffect(() => {
      const fetchData = async function () {
         try {
            setLoading(true)
            setError(false)
            const movie = await API.fetchMovie(movieId)
            const credits = await API.fetchCredits(movieId)
            const similarMovies = await API.fetchMoviesSimilar(movieId)
            const topRated = await API.fetchMoviesTopRated(movieId)
            const recommentMovie = await API.fetchMoviesRecommend(movieId);
            const popularMovie = await API.fetchMovies(undefined, Math.floor(Math.random() * (500 - 1)) + 1)
            const image = await API.fetchMoviesImages(movieId)
            const videoTrailer = await API.fetchVideoTrailer(movieId)
            const videoFull = await API.fetchVideoFull(movie.imdb_id)
           
            // Get directors only
            const directors = credits.crew.filter(
               member => member.job === 'Director'
            );
           
            setState({
              ...movie,
              actors: credits.cast,
              directors,
              similarMovies,
              topRated,
              recommentMovie,
              popularMovie,
              image,
              videoTrailer,
              videoFull,
            });
            setLoading(false)
         } catch (error) {
            setError(true)
         }
      }
      const sessionState = isPersistedState(`movie-${movieId}`);

      if (sessionState) {

         setTimeout(function () {
            setState(sessionState);
            setLoading(false);
            return;
        
         }, 1);

      }
      fetchData()
   }, [movieId])
   
   //  Write to sessionStorage
   useEffect(() => {

      sessionStorage.setItem(`movie-${movieId}`, JSON.stringify(state));
   

   }, [movieId, state])
   return { state, loading, error}
};

