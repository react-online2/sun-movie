import React from "react";
import { useParams } from "react-router";
// Config
import { IMAGE_BASE_URL, POSTER_SIZE } from "../config";
// Components
import BreadCrumb from "./BreadCrumb";
import Spinner from "./Spinner";
import MovieInfo from "./MovieInfo";
// import MovieInfoBar from './MovieInfoBar';
import SimpleSlider from "./SimpleSlider";

import VideoFull from "./VideoFull";
import VideoFull2 from "./VideoFull2";
import Thumb from "./Thumb";

import SimpleTabs from "./SimpleTabs";
// Hook
import { useTvShowFetch } from "../hooks/useTvShowFetch";
// Image
import NoImage from "../images/no_image.jpg";

function isLetter(str) {
  return /[a-z]/i.test(str);
}
export function TvFull({ tv }) {
  return (
    <>
      {
        // ete video chka veradardzni <></>
        tv.videoFull.data.length !== 0 ? (
          <VideoFull iframeSrc={tv.videoFull.data[0].iframe_src} />
        ) : (
          <></>
        )
      }
    </>
  );
}

export default function TvShow() {
  const { tvId } = useParams();
  const { state: tv, loading, error } = useTvShowFetch(tvId);

  if (loading) return <Spinner />;
  if (error) return <div>Something went wrong...</div>;
  // console.log(tv.name);

  const tvName = isLetter(tv.name);
  const tvNameOriginal = isLetter(tv.original_name);

  // alert(tvName)
  // alert(tv.name);
  const tv_name = tvName === tvNameOriginal ? tv.original_name : tv.name;

  return (
    <main>
      <section>
        <BreadCrumb movieTitle={tv.original_name} />
      </section>
      <section>
        <MovieInfo movie={tv} time={tv.runtime} movieTv="tv" />
      </section>

      {/* <MovieInfoBar
         time={movie.runtime}
         budget={movie.budget}
         revenue={movie.revenue}
       /> */}
      <section>
        <SimpleTabs movie={tv} mediaType="tv" />
      </section>

      <section>
        {
          // ete video chka veradardzni <></>
          tv.videoFull.data.length !== 0 ? (
            <VideoFull
              iframeSrc={tv.videoFull.data[0].iframe_src}
              image={tv.image.backdrops[1]}
              imageBack={tv.backdrop_path}
            />
          ) : (
            <></>
          )

          // tv.name ? (
          //   <>
          //     <VideoFull2
          //       image={tv.image.backdrops[1]}
          //       imageBack={tv.backdrop_path}
          //     >
          //       <div
          //         id="flixs"
          //         data-player="bazon,hdvb"
          //         data-separator=","
          //         data-tv="1"
          //         data-bg="#000"
          //         data-title={tv_name}
          //       ></div>
          //     </VideoFull2>
          //   </>
          // ) : (
          //   <>xoski</>
          // )
        }

        {tv.recommentTv.results.length >= 5 ? (
          <SimpleSlider header="Recommends">
            {tv.recommentTv.results.map((movie) => (
              <Thumb
                key={movie.id}
                clickable
                image={
                  movie.poster_path
                    ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
                    : NoImage
                }
                movieId={movie.id}
                mediaType={"tv"}
              />
            ))}
          </SimpleSlider>
        ) : (
          <SimpleSlider header="Popular Movies">
            {tv.popularTv.results.map((movie) => (
              <Thumb
                key={movie.id}
                clickable
                image={
                  movie.poster_path
                    ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
                    : NoImage
                }
                movieId={movie.id}
                mediaType={"tv"}
              />
            ))}
          </SimpleSlider>
        )}
      </section>
    </main>
  );
}
