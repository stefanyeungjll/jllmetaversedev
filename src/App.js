import './App.css';
import styled from "styled-components";
import Camera from "./Components/Display";
import React, { useState } from "react";
import background from "../src/Images/banner1.png";

const JLLLogo = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  padding: 5px;
`;
const Welcometext = styled.button`
  position: relative;
  margin-top: 100px;
  font-family: Arial;
  background-color: #FFFFFF;
  align-content: center;
  text-align: center;
  max-width: fit-content;
  height: 50px;
`;

const AppWrapper = styled.div`
  height: 100%;
  overflow: hidden;
`;
// <ReactiveQR onCode={(code) => console.log(code)} /> //
export default function App() {
  const [iscameraOpen, setIscameraOpen] = useState(false);
  console.log(iscameraOpen);
  return (
    <AppWrapper className="App" style={{backgroundImage: `url(${background})`, height: '1000px'}}>
      <JLLLogo>
        <a href="https://www.jll.com.hk">
          <img
            src="https://www.jll.com.hk/content/dam/jll-com/images/logos/jll-logo-positive.svg"
            alt="JLL Hong Kong"
            loading="lazy"
            width="100"
            height="43"
          ></img>
        </a>
      </JLLLogo>
      <Welcometext onClick={() => setIscameraOpen((prev) => !prev)}>
        2030+ Conceptual Development
      </Welcometext>
      {iscameraOpen && <Camera></Camera>}
    </AppWrapper>
  );
}
