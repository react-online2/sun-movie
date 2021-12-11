import React from "react";
import PropTypes from "prop-types";

// Componets
import SimpleSlider from "../../SimpleSlider";
import Thumb from "../../Thumb";
// Config
import { IMAGE_BASE_URL, POSTER_SIZE } from "../../../config";
// Image
import NoImage from "../../../images/no_image.jpg"

// Styles
import "./style.css"

export default function SimilarMoviesTab({ similarMovies, mediaType }) {
  return (
    <SimpleSlider header="Similar Movies">
      {similarMovies.results.map((movie) => (
        <Thumb
          key={movie.id}
          clickable
          image={
            movie.poster_path
              ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
              : NoImage
          }
          movieId={movie.id}
          nameClass="similar-movies"
          mediaType={mediaType}
        />
      ))}
    </SimpleSlider>
  );
}
SimilarMoviesTab.propTypes = {
  similarMovies: PropTypes.object,
  mediaType: PropTypes.string,
};