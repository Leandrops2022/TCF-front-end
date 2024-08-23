import styled from "styled-components";

export const IframeContainer = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 56.25%; 
  height: 0; 
  overflow: hidden;
  background: #000; 
`;

export const StyledIframe = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none; 
`;
