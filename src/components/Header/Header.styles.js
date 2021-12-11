import styled from 'styled-components';

export const Wrapper = styled.div`
   /* background: var(--darkGrey); */
   padding: 0 20px;

`;


export const Content = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;
   max-width: var(--maxWidth);
   padding: 20px 0;
   margin:0 auto;

`;

export const LogoImg = styled.img`
   width: 70px;
   height: auto;
   animation: infiniteLoop 3s linear infinite;

   @media screen and (max-width: 500px) {
      width: 60px;
      
   }

   @keyframes infiniteLoop {
      from{
         transform: rotate(0deg);
      }
      to {
         transform: rotate(180deg);
      }
   }
`;

export const MVLogoImg = styled.img`
   width: 100px;
   transform: rotateY(180deg);
   @media screen and (max-width: 500px) {
      width: 80px;
   }

`;

