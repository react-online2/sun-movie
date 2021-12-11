import styled from "styled-components";
// Componets



export const Wrapper = styled.div`
  color: var(--darkGrey);
  background: var(--white);
  text-align: center;
  max-width: 300px;
  min-height: 340px;
  border-radius: 6px;
  margin: 10px;

  h3 {
    margin: 25px 0 0 0;
  }
  p {
    margin: 5px 0;
    /* padding: 6px; */
  }
  @media screen and (max-width: 480px) {
    margin: 0 auto;
  }
`;

export const Image = styled.div`
   
   img {
      display: block;
      width: 100%;
      height: 220px;
      transition: all 0.3s;
      object-fit: cover;
      border-radius: 4px 4px 0px 0px;
      animation: animateOpacityImage 1s;
   }
    
`;