import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 70px;
  background: #020916;
  color: var(--white);
  border-bottom: 1px solid;
  border-top: 1px solid;
  box-shadow: 0px 0px 5px 0px white;
`;


export const Content = styled.div`
  display: flex;
  width: 100%;
  max-width: var(--maxWidth);
  padding: 0 20px;

  a {
    overflow: hidden;
  }
  span {
    position: relative;
    font-size: var(--fontMed);
    color: var(--white);
    padding-right: 10px;
    overflow: hidden;

    &:nth-child(1)::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: calc(100% - 10px);
      height: 0.1em;
      background-color: white;
      opacity: 0;
      transition: opacity 300ms, transform 300ms;
    }

    &:nth-child(1)::after {
      opacity: 1;
      transform: translate3d(-100%, 0, 0);
    }

    &:nth-child(1):hover::after,
    &:nth-child(1):focus::after {
      transform: translate3d(0, 0, 0);
    }

    @media screen and (max-width: 768px) {
      font-size: var(--fontSmall);
    }
  }
`;
