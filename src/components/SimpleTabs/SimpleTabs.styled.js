import styled from "styled-components";


export const Wrapper = styled.div`
  max-width: var(--maxWidth);
  margin: 0 auto;
  .MuiButtonBase-root {
    color: white;
  }
  .movie-slider-content {
    @media only screen and (max-width: 768px) {
      padding: 0px;
      padding-bottom: 20px;
    }
  }
  .tab-panel {
    padding: 0 15px;
  }
  .tab-panel:nth-child(4) {
    padding: 55px 15px 20px 15px;
  }
  @media only screen and (min-width: 900px) {
    .tab-panel {
      padding: 0 40px;
    }
    .tab-panel:nth-child(4) {
      padding: 55px 60px 20px 60px;
    }
  }
`;