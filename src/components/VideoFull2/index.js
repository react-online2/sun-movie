import React, {useEffect} from "react";
import Film from "../Film";


// Styles
import { Content, Wrapper} from "../VideoFull/VideoFull.styled";

function VideoFull2({children, image, imageBack}) {
  
  useEffect(() => {
    Film(image, imageBack);
  }, [image, imageBack]);
  
   
  return (
    <Wrapper>
      <Content>
        {children}
      </Content>
    </Wrapper>
  );
}

export default VideoFull2;
