import styled from "styled-components";

export const Wrapper = styled.div`
   width: 100%;
   max-width: 1280px;
   margin: 0 auto;
   padding: 20px;

  #flixs {
    border-radius: 8px;
  }
`;

export const Content = styled.div`
  overflow: hidden;
  padding-bottom: 56.25%;
  position: relative;
  height: 0;
  margin-top: 20px;
  animation: animateOpacityImage 1s;

  iframe {
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    position: absolute;
    border-radius: 8px;
  }
`;
