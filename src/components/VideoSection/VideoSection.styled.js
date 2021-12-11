import styled from "styled-components";


export const Wrapper = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   margin-top: 30px;
   flex-wrap: wrap;
`;

export const PlayTrailer = styled.div `
   padding-right: 5px;
   h3 {
      font-size: 1.3rem;
   }
`;

export const PlayTrailerBox = styled.div`
  overflow: hidden;
  position: relative;
  display: flex;
  border-radius: 8px;
  cursor: pointer;
  background-color: #000;
  transition: all 0.3s linear;

  :hover {
    box-shadow: 0px 1px 20px 0px #fff;
    transition: all 0.3s linear;
    img {
      opacity: 1;
      transition: all 0.3s linear;
      transform: scale(1.08);
      /* box-shadow: 0px 0px 20px 9px #fff; */
    }
    .play-icon {
      color: white;
    }
  }
  img {
    width: 100%;
    max-width: 300px;
    height: auto;
    object-fit: cover;
    opacity: 0.7;
    border-radius: 8px;
    /* box-shadow: 0px 0px 20px 2px #fff; */
    transition: all 0.3s linear;
  }
  .play-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 50px;
    font-size: 90px;
    color: #ffffff94;
    transition: all 0.3s ease-in-out;
  }
`;

export const PlayMovie = styled.div`
   display: block;
   border: 2px solid #fff;
   border-radius: 5px;
   font-size: 18px;
   line-height: 27px;
   color: var(---white);
   white-space: nowrap;
   max-width: 200px;
   margin-top: 120px;
   @media screen and (max-width: 1011px) and (min-width: 768px){
      margin-top: 30px;
   }
   @media screen and (max-width: 613px) {
      margin-top: 30px;
   }
`;

export const PlayMovieBox = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;
   align-self: flex-start;
   column-gap: 8px;
   cursor: pointer;
   padding: 12px 40px;
   transition: all .4s linear;
   
   span:last-child {
      color: white;
      font-weight: 500;
      text-decoration: none;
   }
   .material-icons {
         transition: all .4s ease;
   }
   :hover {
      background-color: #fff;
      box-shadow: 0px 1px 20px 0px #fff;
      
      .material-icons {
         transition: all .4s ease;
         color: #000;
         transform:translateX(5px)
      }
      span:last-child {
         color: #000;
         font-weight: 600;
      }
   }

`;