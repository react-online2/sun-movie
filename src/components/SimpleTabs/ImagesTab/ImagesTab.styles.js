import styled from "styled-components";


export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  animation: animateOpacityImage 1s;

  @media only screen and (max-width: 475px) {
    flex-direction: column;
    align-items: center;
  }
  .MuiTabScrollButton-root {
    color:var(--white) !important;
  }
`;
export const TabsText = styled.div`
  color: #000;
  background-color: #fff;
  font-size: 18px;
  padding: 15px;
  border-radius: 8px 8px 0px 0px;
  font-weight: 600;
  font-size: 18px;
  text-transform: uppercase;
`;