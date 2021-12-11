import React from 'react';

// Config
import {
  POSTER_SIZE,
  BACKDROP_SIZE,
  IMAGE_BASE_URL,
  LOGO_SIZE,
} from "../config";
// Componets
import HeroImage from './HeroImage/';
import Grid from './Grid';
import ThumbHome from './ThumbHome';
import Spinner from './Spinner';
import SearchBar from './SearchBar';
import Button from './Button';
import ScrollUp from "./ScrollToUp";
// import HomeModal from "./HomeModal"
// Hook
import { useHomeFetch } from '../hooks/useHomeFetch'
// Image
import NoImage from '../images/no_image.jpg'



function Home() {
   const {
     state,
     loading,
     error,
     searchTerm,
     setSearchTerm,
     setIsLoadingMore,
     movieSerial,
     setMovieSerial,
   } = useHomeFetch();

   if(error) return <div>Something went wrong ...</div>

  return (
    <main>
      {/* <HomeModal/> */}
      <section>
        {!searchTerm && state.results[0] ? (
          <HeroImage
            image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
            title={state.results[0].original_title}
            text={state.results[0].overview}
          />
        ) : null}
      </section>
      <section>
        <SearchBar setSearchTerm={setSearchTerm} />
      </section>
      <section>
        <Grid
          header={
            searchTerm
              ? "Search Results"
              : movieSerial === "tv"
              ? "Popular Serial"
              : "Popular Movies"
          }
          setMovieSerial={setMovieSerial}
          movieSerial={movieSerial}
        >
          {state.results.map((movie) => {
            return (
              <ThumbHome
                key={movie.id}
                clickable
                image={
                  movie.poster_path
                    ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
                    : NoImage
                }
                imageLogo={
                  movie.logos !== undefined
                    ? IMAGE_BASE_URL + LOGO_SIZE + movie.logos.file_path
                    : movieSerial !== "tv"
                    ? movie.title
                    : movie.name
                }
                movieId={movie.id}
                movieTitle={movie.title ? movie.title : movie.name}
                movieType={movie.media_type ? movie.media_type : movieSerial}
              />
            );
          })}
        </Grid>
      </section>
      <section>
        <ScrollUp />
      </section>
      <section>
        {loading && <Spinner />}
        {state.page < state.total_pages && !loading && (
          <Button text="Load More" callback={() => setIsLoadingMore(true)} />
        )}
      </section>
    </main>
  );

}
export default Home;