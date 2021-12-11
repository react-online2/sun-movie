import styled from "styled-components";

export const Text = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex: 1;
  color: white;
  span {
     cursor: pointer;
  }
`;

export const ModalContent = styled.div`
  width: 50%;
  text-align: center;
  color: var(--white);
  animation: animateOpacityImage 1s;
  :focus {
    outline: none;
  }
  p {
    font-size: 3rem;
    margin: 0;
    flex: 1;
    :last-child {
      flex: none;
      cursor: pointer;
    }
    @media only screen and (max-width: 375px) {
      font-size: 1.5rem;
    }
  }
  img {
    max-width: 480px;
    width: 100%;
  }

  @media screen and (max-width: 900px) {
    width: 100%;
    padding: 90px;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 25px;
  }
`;
