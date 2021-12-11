import styled from "styled-components";

export const Wrapper = styled.div`
  & .scroll-cont {
    position: fixed;
    width: 60px;
    height: auto;
    right: -100px;
    bottom: 60px;
    transition: right 0.5s;
    cursor: pointer;
    font-size: 20px;
    padding: 5px;
    & img {
      width: 100%;
      height: auto;
      object-fit: cover;
      border-radius: 50%;
      transition: all 0.3s ease-in-out;
      :hover {
        box-shadow: 0 0 12px 0 white;
      }
    }
  }
  & .scroll-trans {
    right: 20px;
  }
`;
