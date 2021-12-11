import React, { useState } from "react";
import PropTypes from "prop-types";

// Config
import { BACKDROP_SIZE, IMAGE_BASE_URL } from "../../config";
//Helper
import { onScroll } from "../../helpers";
// Componets
import VideoModal from "../VideoModal";
import LazyImage from "../LazyImage";
// Styles
import {Wrapper, PlayTrailer, PlayTrailerBox, PlayMovie, PlayMovieBox} from "./VideoSection.styled"
// Image
import NoImage from "../../images/no_image.jpg"



function VideoSection({ movie }) {
   const [open, setOpen] = useState(false);
   const handleOpen = () => {
      setOpen(true);
   };

   return (
     <Wrapper>
       <PlayTrailer>
         <h3>Movie Trailer</h3>
         <PlayTrailerBox>
           <LazyImage
             src={
               movie.backdrop_path
                 ? `${IMAGE_BASE_URL}${BACKDROP_SIZE}${movie.backdrop_path}`
                 : NoImage
             }
             alt={
               movie.title
                 ? movie.title
                 : movie.original_name
                 ? movie.original_name
                 : movie.id
             }
           />
           <div className="material-icons play-icon" onClick={handleOpen}>
             play_circle_outline
           </div>
         </PlayTrailerBox>
       </PlayTrailer>

       <PlayMovie
         data-goto=".movie-iframe"
         onClick={onScroll}
         className="play-movie"
       >
         <PlayMovieBox data-goto=".movie-iframe">
           <span data-goto=".movie-iframe" className="material-icons">
             play_arrow
           </span>
           <span data-goto=".movie-iframe">Play Movie</span>
         </PlayMovieBox>
       </PlayMovie>

       <VideoModal
         playOpen={open}
         videoTrailer={movie.videoTrailer}
         movieTitle={
           movie.title
             ? movie.title
             : movie.original_name
         }
         playClose={() => setOpen(false)}
       ></VideoModal>
     </Wrapper>
   );
}
VideoSection.propTypes = {
  movie: PropTypes.object,
};
export default VideoSection;

