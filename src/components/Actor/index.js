import React from 'react';
import PropTypes from 'prop-types';
import LazyImage from '../LazyImage/index.js';
// Styles
import { Wrapper, Image } from './Actor.styled.js'

function Actor({ name, character, imageUrl}) {
   return (
      <Wrapper>
         <Image>
            <LazyImage src={imageUrl} alt={name}/>
         </Image>
         <h3>{name}</h3>
         <p>{character}</p>
      </Wrapper>
   )
}

Actor.propTypes = {
   name: PropTypes.string,
   character: PropTypes.string,
   imageUrl: PropTypes.string,
   
 }

export default Actor;