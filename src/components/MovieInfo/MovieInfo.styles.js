import styled from "styled-components";
import { IMAGE_BASE_URL, BACKDROP_SIZE} from '../../config'


export const Wrapper = styled.div`
  /* background: ${({ backdrop }) =>
    backdrop
      ? `url('${IMAGE_BASE_URL}${BACKDROP_SIZE}${backdrop}')`
      : "#000"}; */
  background: linear-gradient(to bottom, rgb(0 0 0 / 40%) 41%, #020916 100%),
    ${({ backdrop }) =>
      backdrop
        ? `url('${IMAGE_BASE_URL}${BACKDROP_SIZE}${backdrop}')`
        : "#000"},
    #020916;
  background-size: cover;
  background-position: center;
  padding: 40px 20px;
  animation: animateOpacityImage 1s;

  @keyframes animateOpacityImage {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;


export const Content = styled.div`
   display: flex;
   max-width: var(--maxWidth);;
   margin: 0 auto;
   background: rgba(0, 0, 0, 0.7);
   border-radius: 20px;

   @media screen and (max-width: 768px) {
      display: block;
      max-height: none;
   }

`;

export const Text = styled.div`
   width:  100%;
   padding: 20px 40px;
   color: var(--white);
   overflow: hidden;
   font-size: 18px;
   line-height: 24px;
   

   
   .movie-info{
      display: flex;
      justify-content: flex-start;
   }
   .score {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 35px;
      height: 35px;
      background: #fff;
      color: #000;
      font-weight: 800;
      border-radius: 50%;
      margin: 0;

   }

   .movie-info-item {
      margin: 0 0 0 40px;
      :first-child {
         margin: 0;
      }
      p {
         margin: 0;
      }
   }
   h1 {
      @media screen and (max-width: 768px) {
         font-size: var(--fontBig);
      }
   }
   p {
      font-size: var(--fontMed);
      
   }
   .genres {
     
      margin-top: 40px;

      p {
         margin: 0;
      }
      &-block {
         display: flex;
         flex-wrap: wrap;
         column-gap: 20px;
      }
   }
   h1 {
      @media screen and (max-width: 768px) {
         font-size: var(--fontBig);
      }
   }
   @media only screen and (max-width: 375px) {
      .movie-info{
         flex-wrap:wrap
      }
      .movie-info-item.countries {
         margin-left: 0px;
      }
   }

`;


