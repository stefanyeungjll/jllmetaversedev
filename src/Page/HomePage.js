import styled from "styled-components";
import Camera from "../Components/Display";
import React, { useState } from "react";
import SearchAppBar from "../Components/Navbar";

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

export default function HomeLanding(){
    const [iscameraOpen, setIscameraOpen] = useState(false);
    console.log(iscameraOpen);
    return (
      <div>
        <SearchAppBar></SearchAppBar>
        <Welcometext onClick={() => setIscameraOpen((prev) => !prev)}>
          2030+ Conceptual Development
        </Welcometext>
        {iscameraOpen && <Camera></Camera>}
      </div>
    );
  }