import React from 'react';
import { IframeContainer, StyledIframe } from "./styles";

interface IframeProps {
  src: string; 
}

const Iframe: React.FC<IframeProps> = ({ src }) => {
  return (
    <IframeContainer>
    <StyledIframe 
      src={src} 
      title="YouTube video player" 
      referrerPolicy="strict-origin-when-cross-origin" 
      allowFullScreen
    />
  </IframeContainer>
  );
};

export default Iframe;
