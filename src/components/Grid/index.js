import React from 'react';
import PropTypes from 'prop-types';
// Styles
import { Wrapper, Content, Title} from './Grid.style';

// Componets
import ToggleSwitch from '../ToggleSwitch';

function Grid({ header, children, nameClass, setMovieSerial, movieSerial}) {

  return (
      <Wrapper className={nameClass}>
        {header ? (
          <Title>
            <h1>{header}</h1>
            {header === "Popular Movies" || header === "Popular Serial" ? (
              <ToggleSwitch
                setMovieSerial={setMovieSerial}
                movieSerial={movieSerial}
              />
            ) : null}
          </Title>
        ) : null}
        <Content>{children}</Content>
      </Wrapper>
  );
}

Grid.propTypes = {
  header: PropTypes.string,
  nameClass: PropTypes.string,
  movieSerial: PropTypes.string
  
}

export default Grid;