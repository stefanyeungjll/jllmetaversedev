import styled from "styled-components";
// import Camera from "../Components/Display";
import React, { useState } from "react";
import SearchAppBar from "../Components/Navbar";
import {
  First,
  Second,
  Third,
  Fourth
} from '../assets/Images';

import BackgroundSlider from 'react-background-slider'
const Welcometext = styled.button`
  position: relative;
  margin-top: 100px;
  font-family: Arial;
  background-color: #FFFFFF;
  align-content: center;
  text-align: center;
  max-width: fit-content;
  height: 50px;
  border-radius: 8px;
`;

const LinkWrapper = styled.a`
  color: #FFFFFF;
  text-decoration: none;
`;

export default function HomeLanding(){
    const [iscameraOpen, setIscameraOpen] = useState(false);
    console.log(iscameraOpen);
    return (
      <div>
        <BackgroundSlider 
        images={[First, Second, Third, Fourth]}
        duration={10}
        transition={2}
        >
        </BackgroundSlider>
        <SearchAppBar></SearchAppBar>
        <Welcometext onClick={() => setIscameraOpen((prev) => !prev)}>
          <LinkWrapper href="3dbuildings.html">2030+ Conceptual Development</LinkWrapper>
        </Welcometext>
        {/* {iscameraOpen && <Camera></Camera>} */}
      </div>
    );
  }