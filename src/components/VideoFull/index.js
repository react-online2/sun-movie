import React from "react";
import PropTypes from "prop-types";
// Config
import { IMAGE_BASE_URL, BACKDROP_SIZE } from "../../config";
// Styles
import { Wrapper, Content } from "./VideoFull.styled";

function VideoFull({ iframeSrc, image, imageBack }) {
  if (iframeSrc !== "undefined") {
    // Change Video domen (7720.svetacdn.in to 45.svetacdn.in(my domen))
    let src = iframeSrc.split("/");
    src[2] = "45.svetacdn.in";
    src = src.join("/");
    return (
      <Wrapper>
        <Content>
          <iframe // width="653" // height="380"
            src={`${src}?&poster=${
              image !== undefined
                ? `${IMAGE_BASE_URL}${BACKDROP_SIZE}${image.file_path}`
                : imageBack !== undefined
                ? `${IMAGE_BASE_URL}${BACKDROP_SIZE}${imageBack}`
                : `https://www.universalpictures.com/assets/img/universal-share.jpg`
            }`}
            frameBorder="0"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Movie"
            className="movie-iframe"
          />
        </Content>
      </Wrapper>
    );
  } else {
    return <></>;
  }
}

VideoFull.propTypes = {
  iframeSrc: PropTypes.string,
  image: PropTypes.object,
  imageBack: PropTypes.string,
};

export default VideoFull;
