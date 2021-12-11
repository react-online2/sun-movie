import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Montserrat:300,400,700,800');
   :root {
      --maxWidth: 1280px;
      --white: #fff;
      --lightGrey: #eee;
      --medGrey: #151F2E;
      --darkGrey: #020916;
      --fontSuperBig: 2.5rem;
      --fontBig: 1.5rem;
      --fontMed: 1.2rem;
      --fontSmall: 1rem;
   }
   * {
      box-sizing: border-box;
      font-family: 'Abel', sans-serif;
   }
   body {
      padding: 0;
      margin: 0;
      background-color: #020916;
      -webkit-font-smoothing: antialiased;
      color: var(--white);
      overflow-x: hidden;

      h1 {
         font-size: 2rem;
         font-weight: 600;
         color: var(---white);
      }
      h3 {
         font-size: 1rem;
         font-weight: 600;
      }
      p {
         font-size: 1rem;
         color: var(---white);
      }
      a {
         text-decoration:none;
      }

   }
   main {
      animation: animateOpacityImage 1s;
   }

   body::-webkit-scrollbar-track
   {
      -webkit-box-shadow: inset 0 0 6px rgb(0 0 0 / 30%);
      border-radius: 10px;
      background-color: #0000;
   }

   body::-webkit-scrollbar
   {
      width: 5px;
      height: 5px;
      background-color: #000;
   }

   body::-webkit-scrollbar-thumb
   {
      border-radius: 10px;
      -webkit-box-shadow: inset 0 0 2px 0px rgb(0 0 0 / 40%);
      background-color: #ffffff;

   }
`;