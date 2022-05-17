import './App.css';
import styled from "styled-components";
import Camera from "./Components/Display";
import React, { useState } from "react";
import background from "../src/Images/banner1.png";
import SearchAppBar from "./Components/Navbar";

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

const AppWrapper = styled.div`
  position: relative;
  // max-width: 1264px;
  overflow: hidden;
`;
// <ReactiveQR onCode={(code) => console.log(code)} /> //
export default function App() {
  const [iscameraOpen, setIscameraOpen] = useState(false);
  console.log(iscameraOpen);
  return (
    <AppWrapper className="App" style={{backgroundImage: `url(${background})`, height: 1214}}>
      <SearchAppBar></SearchAppBar>
      
      <Welcometext onClick={() => setIscameraOpen((prev) => !prev)}>
        2030+ Conceptual Development
      </Welcometext>
      {iscameraOpen && <Camera></Camera>}
    </AppWrapper>
  );
}
