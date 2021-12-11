import React from "react";
import PropTypes from "prop-types";
// Components
import Thumb from "../Thumb";
// import VideoModal from "../VideoModal";
import VideoSection from "../VideoSection";

import { IMAGE_BASE_URL, POSTER_SIZE } from "../../config";
// Image
import NoImage from "../../images/no_image.jpg";
// Styles
import { Wrapper, Content, Text } from "./MovieInfo.styles";
// Helpers
import { calcTime } from "../../helpers";

function MovieInfo({ movie, time, movieTv = "movie" }) {
  const dateYear = new Date(movie.release_date);

  return (
    <Wrapper backdrop={movie.backdrop_path}>
      <Content>
        <Thumb
          image={
            movie.poster_path
              ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
              : NoImage
          }
          clickable={false}
          alt="movie-thumb"
          nameClass="movie-post"
        />
        <Text>
          <h1>{movie.title}</h1>
          <h3>Overview</h3>
          <p>{movie.overview}</p>

          <div className="movie-info">
            <div className="movie-info-item">
              <h3>RATING</h3>
              <div className="score">{movie.vote_average}</div>
            </div>
            <div className="movie-info-item director">
              {movieTv === "tv" ? (
                <>
                  <h3>CREATED BY</h3>
                  {movie.created_by.map((created_by) => (
                    <p key={created_by.credit_id}>{created_by.name}</p>
                  ))}
                </>
              ) : (
                <>
                  <h3>DIRECTOR{movie.directors.length > 1 ? "S" : ""}</h3>
                  {movie.directors.map((director) => (
                    <p key={director.credit_id}>{director.name}</p>
                  ))}
                </>
              )}
            </div>
            <div className="movie-info-item countries">
              <h3>
                COUNTRIE{movie.production_countries.length > 1 ? "S" : ""}
              </h3>
              {movie.production_countries.map((countries, index) => (
                <p key={index}>{countries.name}</p>
              ))}
            </div>
          </div>
          {movieTv === "tv" ? (
            <div className="movie-info">
              <div className="movie-info-item release-date">
                <h3>SEASONS</h3>
                <p>{movie.number_of_seasons}</p>
              </div>
              <div className="movie-info-item movie-time">
                <h3>EPISODES</h3>
                <div>{movie.number_of_episodes}</div>
              </div>
            </div>
          ) : (
            <div className="movie-info">
              <div className="movie-info-item release-date">
                <h3>RELEASE DATE</h3>
                <p>{dateYear.getFullYear()}</p>
              </div>
              <div className="movie-info-item movie-time">
                <h3>TIME</h3>
                <div>{calcTime(time)}</div>
              </div>
            </div>
          )}

          <div className="genres">
            <h3>GENRE{movie.genres.length > 1 ? "S" : ""}</h3>
            <div className="genres-block">
              {movie.genres.map((genres) => (
                <p key={genres.id}>{genres.name}</p>
              ))}
            </div>
          </div>
          <VideoSection movie={movie} />
        </Text>
      </Content>
    </Wrapper>
  );
}

MovieInfo.propTypes = {
  time: PropTypes.number,
  movie: PropTypes.object,
  movieTv: PropTypes.string
};
export default MovieInfo;
