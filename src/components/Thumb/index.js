import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// import Tilt from "react-parallax-tilt";


// Styles

import { Image, Content } from './Thumb.styles';

function Thumb({ image, movieId, clickable, nameClass="film-content", mediaType}) {

   return (
     <Content className={`${nameClass} slider-cont-item`}>
       {clickable ? (
         <Link to={`/${mediaType + "/" + movieId}`}>
           <Image src={image} alt="movie-thumb" />
         </Link>
       ) : (
         <Image src={image} alt="movie-thumb" />
       )}
     </Content>
   );
}

Thumb.propTypes = {
  image: PropTypes.string,
  movieId: PropTypes.number,
  clickable: PropTypes.bool,
  nameClass: PropTypes.string,
  mediaType: PropTypes.string,
  
};

export default Thumb;