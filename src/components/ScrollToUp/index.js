import React from "react";
import ScrollUpButton from "react-scroll-up-button";

// Style
import { Wrapper } from "./ScrollToUp.styles";

// Image
import ScrollUpImage from "../../images/scroll-up.png"


export default function ScrollUp() {
  return (
      <Wrapper>
        <ScrollUpButton
          ContainerClassName="scroll-cont"
          TransitionClassName="scroll-trans"
          EasingType="linear"
          ShowAtPosition={700}
        >
          <img src={ScrollUpImage} alt="scroll-up" />
        </ScrollUpButton>
      </Wrapper>
  );
}
