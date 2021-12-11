import React from "react";
import PropTypes from "prop-types";
// Style
import { ContentImg } from "./MovieImage.styles";
// Componets
import LazyImage from "../LazyImage";
import SimpleLight from "../SimpleLight";
import Grid from "../Grid";
// Config
import { IMAGE_BASE_URL, POSTER_SIZE } from "../../config";
// Image
import NoImage from "../../images/no_image.jpg";

function MovieImage({imageAlt, headerTitle, movieImage, maxImage, nameClass = "",}) {
  return (
    <SimpleLight>
      <Grid header={headerTitle} nameClass={nameClass}>
        {movieImage
          .filter(
            (image) => image.iso_639_1 === "en" || image.iso_639_1 === null
          )
          .slice(0, maxImage)
          .map((image, index) => (
            <ContentImg key={index}>
              <LazyImage
                alt={imageAlt}
                src={
                  image.file_path
                    ? `${IMAGE_BASE_URL}${POSTER_SIZE}${image.file_path}`
                    : NoImage
                }
              ></LazyImage>
            </ContentImg>
          ))}
      </Grid>
    </SimpleLight>
  );
}
MovieImage.propTypes = {
  imageAlt: PropTypes.string,
  headerTitle: PropTypes.string,
  movieImage: PropTypes.any,
  maxImage: PropTypes.number,
  nameClass: PropTypes.string,
};
export default MovieImage;

