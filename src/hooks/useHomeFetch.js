import { useEffect, useState } from "react";
// API
import API from "../API";
// Helpers
import { isPersistedState } from "../helpers";

const initialState = {
  page: 0,
  results: [],
  total_pages: 0,
  total_results: 0,
};

export function useHomeFetch() {
  const [searchTerm, setSearchTerm] = useState("");
  const [state, setState] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [movieSerial, setMovieSerial] = useState("movie");
  


  async function multiSearch(searchTerm, page) {

    
    // moviesSerials;
    const moviesSerials = await API.fetchMulti(searchTerm, page);

    //  const moviesSerials = await Promise.all(promises);
    const multiSearchFilter = moviesSerials.results.filter(
      (movSer) => movSer.media_type === "tv" || movSer.media_type === "movie"
    );
   
    moviesSerials.results = [...multiSearchFilter];
    return moviesSerials;
  }
  // Movie Logo
  const fetchMovieImages = async function (moviesSerials) {
    
     const promises = moviesSerials.results.map(async (movSer) => {
        if (!searchTerm) {
           const moviesLogo =
             movieSerial === "movie"
               ? await API.fetchMoviesImages(movSer.id)
               : await API.fetchSerialsImages(movSer.id);
           return moviesLogo;
       }
        else {
          
          const moviesLogo =
            movSer.media_type === "tv"
              ? await API.fetchSerialsImages(movSer.id)
              : await API.fetchMoviesImages(movSer.id);
        
          
          return moviesLogo;
          
       }
     });
    
    const moviesLogo = await Promise.all(promises);
    
    moviesSerials.results.forEach(
      
      (movie, index) => (movie.logos = moviesLogo[index].logos[0])
    );
    return moviesSerials;
  };

  const fetchMovies = async function (page, searchTerm = "", fetchMovieImages) {
    try {
      setError(false);
      setLoading(true);

        let moviesSerials =
          movieSerial === "movie"
            ? await API.fetchMovies(searchTerm, page)
            : await API.fetchSerials(searchTerm, page);


      // Search
      moviesSerials = searchTerm !== "" ? await multiSearch(searchTerm, page) : moviesSerials;
      
      
      
      moviesSerials = await fetchMovieImages(moviesSerials);
      
      
      setState((prev) => ({
         ...moviesSerials,
         results:
         page > 1
         ? [...prev.results, ...moviesSerials.results]
            : [...moviesSerials.results],
         }));
    } catch (error) {
      setError(true);
    }
    setLoading(false);
  };

  // Search abd Initial render
  useEffect(() => {
     
    // console.log(searchTerm, "searchTerm - useHomeFetch.js");
    if (!searchTerm) {
       if (movieSerial === "movie") {
        const sessionState = isPersistedState("homeStateMovies");
        if (sessionState) {
          // console.log("Grabbing from sessionStorage");
          setState(sessionState);
          return;
         }
      } else if (movieSerial === "tv") {
        const sessionState = isPersistedState("homeStateSerials");
        if (sessionState) {
           // console.log("Grabbing from sessionStorage");
          setState(sessionState);
          return;
        }
      }
     }
     
    // console.log(initialState , "Grabbing from API");
    setState(initialState);
    fetchMovies(1, searchTerm, fetchMovieImages);
  }, [searchTerm, movieSerial]);

  // Load More
  useEffect(() => {
    if (!isLoadingMore) return;
    fetchMovies(state.page + 1, searchTerm, fetchMovieImages);

    setIsLoadingMore(false);
  }, [isLoadingMore, state.page, searchTerm, fetchMovies]);

  //  Write to sessionStorage
  useEffect(() => {
    if (!searchTerm && movieSerial === "movie") {
      sessionStorage.setItem("homeStateMovies", JSON.stringify(state));
    } else if (!searchTerm && movieSerial === "tv") {
      sessionStorage.setItem("homeStateSerials", JSON.stringify(state));
    }
  }, [searchTerm, state, movieSerial]);
  // return { state:state, loading:loading, error:error}
   
  return {
    state,
    loading,
    error,
    searchTerm,
    setSearchTerm,
    isLoadingMore,
    setIsLoadingMore,
    movieSerial,
    setMovieSerial,
  };
}
