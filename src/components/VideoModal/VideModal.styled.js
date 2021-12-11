import styled from "styled-components";

export const Text = styled.div`
   display: flex;
   align-items: center;
   flex: 1;
   color: white;
   span {
      font-size: 24px;
      flex: 1;
      :last-child {
         flex: none;
         cursor: pointer;
      }
   }
`;

export const ModalContent = styled.div`
  width: 50%;
  :focus {
     outline: none;
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