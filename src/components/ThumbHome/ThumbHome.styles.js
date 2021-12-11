import styled from "styled-components"


export const ImageItem = styled.div`
  img {
    width: 100%;
    height: 100%;
    max-width: 720px;
    transition: all 0.3s;
    object-fit: cover;
    border-radius: 20px;
    animation: animateThumb 0.5s;
    cursor: pointer;

    /* :hover {
      opacity: 0.8;
   } */

    @keyframes animateThumb {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
  }
`;

export const Wrapper = styled.div`
  animation: animateOpacityImage 1s;
  @import "../ReactParallaxTilt.scss";
  .parallax-effect-glare-scale {
    @include background;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
    border-radius: 20px;

    transform-style: preserve-3d;
  }


  .film-content {
    position: relative;
    z-index: 1;
  }
  .inner-element {
    width: 100%;
    height: 100%;
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 35px;
    font-style: italic;
    color: white;
    transform: translateZ(60px);
    margin: 0;

    img {
      width: 100%;
      display: block;
      object-fit: cover;
      opacity: 0;
    }
    .movie-tv--title {
      width: 100%;
      font-size: 35px;
      text-align: center;
      text-transform: uppercase;
      color: #01060f;
      background-color: var(--white);
      border-radius: 5px;
      font-style: normal;
      opacity: 0;
      box-shadow: 0 0 20px 8px #01060f;
    }
    /* ::before {
      content: "👽";
      opacity: 0;
    } */
    :hover img {
      animation: animateOpacityImage 0.5s forwards;
    }
    :hover div {
      content: "👽";
      animation: animateOpacityImage 0.5s forwards;
    }
  }
`;