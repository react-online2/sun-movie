import React from "react";
import PropTypes from "prop-types";
// Componets
import Actor from "../../Actor"
import Grid from "../../Grid"
import SimpleSlider from "../../SimpleSlider";

// Config
import { IMAGE_BASE_URL, POSTER_SIZE } from '../../../config';

// Image
import NoImage from '../../../images/no_image.jpg'


export default function ActorTabs({ movie }) {

   return (
      <div>
         {
            // ete 4 hoquch avel en beri slider-ov hakaraka depqum beri grid-ov
            movie.actors.length > 4
            ? <SimpleSlider header='Actors'>
                     {movie.actors.map((actor) => (
                        <Actor
                           key={actor.credit_id}
                           name={actor.name}
                           character={actor.character}
                           imageUrl={actor.profile_path ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}` : NoImage}
                           
                        />
                     ))}
               </SimpleSlider>
            : <Grid header='Actors'>
                     {movie.actors.map((actor) => (
                        <Actor
                           key={actor.credit_id}
                           name={actor.name}
                           character={actor.character}
                           imageUrl= {
                              actor.profile_path
                                 ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}`
                                 : NoImage
                              }
                        />
                     ))}
               </Grid>
         }
      </div>
   )
}
ActorTabs.propTypes = {
  movie: PropTypes.object,
};