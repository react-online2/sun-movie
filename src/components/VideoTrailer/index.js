import { Content } from "./VideoTrailer.styled";
import React from "react";
import PropTypes from "prop-types";

// ete video ka beri russeren(vori type = Trailer) ete russeren chka beri english(vori type = Trailer) ete english u russian chka beri chankachats video ete vochmi vieo chka beri undefined
function findVideo(videoTrailer, trailers) {
  trailers.push(
    videoTrailer.results.filter(
      (trailer) => trailer.type === "Trailer" && trailer.iso_639_1 === "en"
    )
  );
  if (trailers[0].length === 0) {
    trailers = [];
    trailers.push(
      videoTrailer.results.filter(
        (trailer) =>
          trailer.type === "Teaser" &&
          trailer.iso_639_1 === "en" &&
          trailer.site === "YouTube"
      )
    );
  }
  if (trailers[0].length === 0) {
    trailers = [];
    trailers.push(
      videoTrailer.results.filter(
        (trailer) =>
          trailer.type === "Featurette" &&
          trailer.iso_639_1 === "en" &&
          trailer.site === "YouTube"
      )
    );
  }
  if (trailers[0].length === 0) {
    trailers = [];
    trailers.push(
      [videoTrailer.results[0]]
    );
  }
  return trailers[0].length !== 0 && trailers[0][0] !== undefined
    ? trailers[0][0].key
    : undefined;
  // if (videoTrailer.results.length !== 0) {
  //   const videoResultsRu = videoTrailer.results.find(
  //     (ru) => ru.iso_639_1 === "ru" && ru.type === "Trailer"
  //   );
  //   const videoResultsEn = videoTrailer.results.find(
  //     (en) => en.iso_639_1 === "en" && en.type === "Trailer"
  //   );

  //   if (videoResultsRu !== undefined) {
  //     return videoResultsRu.key;
  //   } else if (videoResultsRu !== undefined) {
  //     return videoResultsRu.key;
  //   } else {
  //     return videoTrailer.results[0].key;
  //   }
  // } else {
  //   return undefined;
  // }
}

function VideoTrailer({ videoTrailer, embedId }) {
  const trailers = [];
  const id = embedId == null ? findVideo(videoTrailer, trailers) : embedId;
  if (id !== null && id !== undefined) {
    return (
      <>
        <Content>
          <iframe
            width="653"
            height="380"
            src={id ? `https://www.youtube.com/embed/${id}`: ''}
            frameBorder="0"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
          />
        </Content>
      </>
    );
  } else {
    return (
      <Content>
        <p>Not Found Trailer</p>
      </Content>
    );
  }
}

VideoTrailer.propTypes = {
  videoTrailer: PropTypes.object,
  embedId: PropTypes.any,
};

export default VideoTrailer;
