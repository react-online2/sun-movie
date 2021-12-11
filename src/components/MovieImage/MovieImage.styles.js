import styled from "styled-components";

export const ContentImg = styled.div`
   transition: all 0.3s ease;
   :hover {
      opacity: 0.8;
   }
   img {
      display: block;
      width: 100%;
      height: auto;
      transition: all 0.3s;
      object-fit: cover;
      border-radius: 15px;
      animation: animateOpacityImage 1s;


      @keyframes animateOpacityImage {
         from {
            opacity: 0;
         }
         to {
            opacity: 1;
         }
      }
   }
`;