import styled from 'styled-components';

export const Wrapper = styled.button`
  display: block;
  background: var(--white);
  width: 25%;
  min-width: 200px;
  height: 60px;
  border-radius: 30px;
  color: var(--darkGrey);
  border: 0;
  font-weight: 600;
  font-size: var(--fontBig);
  margin: 50px auto;
  transition: all 0.3s ease-in-out;
  outline: none;
  cursor: pointer;

  :hover {
    box-shadow: 0 0 13px 0 #fff;
  }
`;
