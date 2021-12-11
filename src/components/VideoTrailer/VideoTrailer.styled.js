import styled from "styled-components"



export const Content = styled.div`
  overflow: hidden;
  padding-bottom: 56.25%;
  position: relative;
  height: 0;
  background-color: #000;
  iframe {
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    position: absolute;
    border-radius: 0px 0px 8px 8px;
    div {
      background-color: var(--white);
      animation: animateOpacityImage 1s;
    }
  }
  p {
    position: absolute;
    top: 25%;
    left: 50%;
    transform: translate(-50%, -50%);
    white-space: nowrap;
    font-size: 4rem;
  }
  @media (max-width: 767px) {
    p {
      font-size: 2rem;
    }
  }
`;

