import React from "react";
import styled from "styled-components";


const BodyWrapper = styled.div`
  height: 100%;
  padding-top: 15px;
`;

const LinkWrapper = styled.a`
  color: #FFFFFF;
`;

function Camera() {
  return (
    <BodyWrapper>
      <LinkWrapper href="3dbuildings.html">Click here to scan QR code</LinkWrapper>
    </BodyWrapper>
  );
}

export default Camera;
