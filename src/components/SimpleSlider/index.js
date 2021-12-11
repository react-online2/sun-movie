import React from "react";
import PropTypes from "prop-types";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container } from './SimpleSlider.styles'

// Image
import Arrow from "../../images/arrow-slider.png"

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "flex" }}
      onClick={onClick}
    >
      <img src={Arrow} alt="arrow-next"/>
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{...style,display: "flex"}}
      onClick={onClick}
    >
      <img src={Arrow} alt="arrow-prev"/>
    </div>
  );
}

export default function SimpleSlider({ header, children }) {
  let settings = {
   infinite: false,
   speed: 900,
   slidesToShow: 5,
   slidesToScroll: 4,
   easing: "ease-in-out",
   adaptiveHeight: true,
    initialSlide: 0,
   touchMove: false,
   nextArrow: <SampleNextArrow />,
   prevArrow: <SamplePrevArrow />,

   responsive: [{
         breakpoint: 1024,
         settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
         }
      },
      {
         breakpoint: 600,
         settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
         }
      },
      {
         breakpoint: 480,
         settings: {
            slidesToShow: 1,
            slidesToScroll: 1
         }
      }
   ]
    
  };
  return (
     <Container className="movie-slider-content">
        <h1>{header}</h1>
         <Slider {...settings}>
            {children}
         </Slider>
      </Container>
      
 
    
  );
}
SimpleSlider.propTypes = {
  header: PropTypes.string,
};