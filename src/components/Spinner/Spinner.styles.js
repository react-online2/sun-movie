import styled from 'styled-components'


export const Spinner = styled.div`
  /* border: 5px solid var(--lightGrey);
  border-top: 5px solid var(--medGrey);
  border-radius: 50%; */
  width: 50px;
  height: 50px;
  background-image: url(${({ image }) => image});
  background-size: 100%;
  background-repeat: no-repeat;
  animation: spin 0.8s linear infinite;
  margin: 20px auto;

  @keyframes spin {
    0% {
      transfor: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
