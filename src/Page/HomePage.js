import styled from "styled-components";
// import Camera from "../Components/Display";
import React, { useState } from "react";
// import SearchAppBar from "../Components/Navbar"; might be userful for later
import Typography from '@material-ui/core/Typography';
import { withStyles } from "@material-ui/core/styles";
import Logo from "../assets/JLLlogo.png";

const bodytext = "Bread flour is the best flour for homemade pizza dough. You can use all-purpose flour instead of the bread flour called for in the recipe, but bread flour is higher in gluten than all-purpose flour and will make a crispier crust for your pizza."
const WhiteTextTypography = withStyles({
  root: {
    color: "#FFFFFF"
  }
})(Typography);

const HoverButton = styled.button`
  position: relative;
  margin-top: 20px;
  font-family: Arial;
  background-color: #FFFFFF;
  align-content: center;
  text-align: center;
  height: 50px;
  border-radius: 15px;
  
  @media screen 
  and (min-device-width: 375px) 
  and (max-device-width: 414px) 
  and (-webkit-min-device-pixel-ratio: 1) { 
    font-size: 10px;
    width: 335px;
}
`;

const Title = styled.p`
  position: relative;
  margin-top: 100px;
  color: #FFFFFF;
  align-content: center;
  text-align: center;
  font-size: 26px;
  @media screen 
  and (min-device-width: 1264px) 
  and (max-device-width: 1600px) 
  and (-webkit-min-device-pixel-ratio: 1) { 
    font-size: 52px;
}

`;
const LinkWrapper = styled.a`
  color: #FFFFFF;
  text-decoration: none;
`;

const PageWrapper = styled.div`
  position: relative;
  max-width: 1264px;
  overflow: hidden;
  height: 100vh;
  margin: auto;
  background: rgba(0,0,0,.5);
`;

const JLLLogo = styled.img`
  position: absolute;
  left: 0;
  top: 0;
  width:136px;
  height: 84px;
`;

export default function HomeLanding(){
    const [iscameraOpen, setIscameraOpen] = useState(false);
    console.log(iscameraOpen);
    return (
      <PageWrapper>
        <JLLLogo src={Logo}></JLLLogo>
        {/* <SearchAppBar></SearchAppBar> */}
        <Title>GIS Consultancy</Title>
        <WhiteTextTypography variant="body2">
          {bodytext}
        </WhiteTextTypography>
        <HoverButton onClick={() => setIscameraOpen((prev) => !prev)}>
          <LinkWrapper href="3dbuildings.html">The Map</LinkWrapper>
        </HoverButton>
        <HoverButton onClick={console.log('hello clicked second button')}>
          <LinkWrapper href="https://www.jll.com.hk/">JLL Official Website</LinkWrapper>
        </HoverButton>
        <HoverButton onClick={console.log('hello clicked second button')}>
          <LinkWrapper href="https://www.jll.com.hk/">GIS Consultancy Service</LinkWrapper>
        </HoverButton>
        {/* {iscameraOpen && <Camera></Camera>} */}
      </PageWrapper>
    );
  }