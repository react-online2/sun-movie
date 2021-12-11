import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Tilt from "react-parallax-tilt";

// Componets
import LazyImage from '../LazyImage'

// Styles
import "./style.css";
import { Wrapper, ImageItem } from "./ThumbHome.styles";

function Thumb({ image, movieId, clickable, imageLogo, movieTitle, movieType='movie'}) {
 
  return (
    <Wrapper>
      <Tilt
        className="parallax-effect-glare-scale"
        perspective={900}
        glareEnable={true}
        glareMaxOpacity={0.45}
        scale={1.02}
        // glareColor={"#000"}
        glareBorderRadius={"20px"}
      >
        {clickable ? (
        <>
        <Link to={`${movieType}/${movieId}`} className="inner-element">
          {imageLogo !== movieTitle && imageLogo !== undefined ? (
            <LazyImage src={imageLogo} alt={movieTitle} />
          ) : (
            <div className="movie-tv--title">{movieTitle}</div>
          )}
          {/* <p>👽</p> */}
        </Link>
        <ImageItem>
          <LazyImage src={image} alt="movie-thumb" />
        </ImageItem>
        </>
        )
        :(
            <ImageItem>
              <LazyImage
                src={image}
                alt="movie-thumb"
                className="inner-element"
              />
            </ImageItem>
          )}

      </Tilt>
    </Wrapper>
  );
}

Thumb.propTypes = {
  image: PropTypes.string,
  movieId: PropTypes.number,
  clickable: PropTypes.bool,
  imageLogo: PropTypes.string,
  movieTitle: PropTypes.string,
  movieType: PropTypes.string,
};

export default Thumb;
