import styled from "styled-components";

export const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding:20px;
  padding-bottom: 50px;
  color: var(--white);
  
  /*@media only screen and (max-width: 768px) {
    padding:0px;
    padding-bottom: 20px;
   }*/
  h1 {
    padding-left: 15px;
  }


  .MuiTabs-scrollButtons {
    color:var(--white)
  }
  .slick-arrow {
    color: black;
  }
  .slicl-arrow::before {
    display: none;
  }
  .slick-disabled {
    cursor: default;
    background: green;
    opacity: 0.5;
  }
  .slick-prev {
    z-index: 100;
    display: flex;
    background-color: white;
    box-shadow: -1px 2px 20px 0px #ffffff75;
    width: 35px;
    height: 34px;
    border-radius: 50%;
    justify-content: center;
    align-items: center;
    /* position: absolute;
    top: 41%;*/
    left: 8px; 
    transform: translate(-30%, 0%);
    transition: all 0.3s ease;
    &::before {
      display: none;
    }
    &:hover {
      box-shadow: -3px 3px 20px 6px #ffffff75;
      background-color: var(--white);
    }
    img {
      transform: rotateY(180deg);
      margin-right: 2px;
    }
  }
  .slick-next {
    z-index: 100;
    display: flex;
    background-color: white;
    box-shadow: -1px 2px 20px 0px #ffffff75;
    width: 35px;
    height: 34px;
    border-radius: 50%;
    justify-content: center;
    align-items: center;
    /* position: absolute; */
    /* top: 41%;*/
    right: 0; 
    transform: translate(0%, 0%);
    transition: all 0.3s ease;
    &::before {
      display: none;
    }
    &:hover {
      box-shadow: 3px 3px 20px 6px #ffffff75;
      background-color: var(--white);
    }
    img {
      margin-left: 2px;
    }
  }
  /* .slick-slide .film-content {
    margin: 10px;
    padding: 2%;
  } */
  /* .slick-list {
      margin: 0 -10px;
   } */

`;
