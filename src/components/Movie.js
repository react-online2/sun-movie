import React from "react";
import { useParams } from 'react-router';
// Config
import { IMAGE_BASE_URL, POSTER_SIZE } from '../config';
// Components
import BreadCrumb from './BreadCrumb';
import Spinner from './Spinner';
import MovieInfo from './MovieInfo';
// import MovieInfoBar from './MovieInfoBar';
import SimpleSlider from './SimpleSlider';

import VideoFull from './VideoFull';
// import VideoFull2 from './VideoFull2'
import Thumb from './Thumb';

import SimpleTabs from './SimpleTabs';
// Hook
import { useMovieFetch } from '../hooks/useMovieFetch'
// Image
import NoImage from '../images/no_image.jpg'

// // Help Film
// import Film from "./Film";


export function MovieFull({ movie }) {

   return (
      <>
         {
            // ete video chka veradardzni <></>
            movie.videoFull.data.length !== 0 ? <VideoFull iframeSrc={movie.videoFull.data[0].iframe_src} /> : <></>

         }
      </>
   )
}

export default function Movie() {
  const { movieId } = useParams();

  const { state: movie, loading, error } = useMovieFetch(movieId);

  if (loading) return <Spinner />;
  if (error) return <div>Something went wrong...</div>;

  // const dateYear = new Date(movie.release_date).getFullYear();
  return (
    <main>
      <section>
        <BreadCrumb movieTitle={movie.original_title} />
      </section>
      <section>
        <MovieInfo movie={movie} time={movie.runtime} />
      </section>
      {/* <MovieInfoBar
         time={movie.runtime}
         budget={movie.budget}
         revenue={movie.revenue}
       /> */}
      <section>
        <SimpleTabs movie={movie} mediaType="movie"/>
      </section>

      <section>
          {
            // ete video chka veradardzni <></>
            movie.videoFull.data.length !== 0 ? (
              <VideoFull
                iframeSrc={movie.videoFull.data[0].iframe_src}
                image={movie.image.backdrops[1]}
                imageBack={movie.backdrop_path}
              />
            ) : (
              <></>
            )
          }
       </section>
      {/* {movie.title ? (
        <>
          <VideoFull2
            image={movie.image.backdrops[1]}
            imageBack={movie.backdrop_path}
          >
            <div
              id="flixs"
              data-player="bazon,hdvb"
              data-separator=","
              data-bg="#000"
              data-resize="1"
              data-title={`${movie.title} ${dateYear}`}
            ></div>
          </VideoFull2>
        </>
      ) : (
        <></>
      )} */}

      <section>
        {movie.recommentMovie.results.length >= 5 ? (
          <SimpleSlider header="Recommends">
            {movie.recommentMovie.results.map((movie) => (
              <Thumb
                key={movie.id}
                clickable
                image={
                  movie.poster_path
                    ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
                    : NoImage
                }
                movieId={movie.id}
                mediaType={"movie"}
              />
            ))}
          </SimpleSlider>
        ) : (
          <SimpleSlider header="Popular Movies">
            {movie.popularMovie.results.map((movie) => (
              <Thumb
                key={movie.id}
                clickable
                image={
                  movie.poster_path
                    ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
                    : NoImage
                }
                movieId={movie.id}
                mediaType={"movie"}
              />
            ))}
          </SimpleSlider>
        )}
      </section>
    </main>
  );
}
