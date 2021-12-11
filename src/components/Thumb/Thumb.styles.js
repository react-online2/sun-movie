import styled from "styled-components"


export const Image = styled.img`
  width: 100%;
  height: 100%;
  min-height: 292px;
  max-width: 720px;
  transition: all 0.3s;
  object-fit: cover;
  border-radius: 20px;
  animation: animateOpacityImage 1s;
  cursor: pointer;
`;

export const Content = styled.div`
  &.slider-cont-item {
    margin: 10px;
    background-color: black;
    animation: animateOpacityImage 1s;
    border-radius: 20px;
  }
  &.movie-post {
    margin: 0;
    background-color: transparent;
  }
`;