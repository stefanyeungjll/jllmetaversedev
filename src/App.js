import './App.css';
import styled from "styled-components";
import React from "react";
import background from "../src/Images/banner1.png";
import hongkong1 from "../src/Images/hongkong1.jpg";
import hongkong2 from "../src/Images/hongkong2.jfif";
import hongkong3 from "../src/Images/hongkong3.jfif";
import BackgroundSlider from 'react-background-slider'

import HomeLanding from "./Page/HomePage";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";




const AppWrapper = styled.div`
  position: relative;
  // max-width: 1264px;
  overflow: hidden;
`;

// <ReactiveQR onCode={(code) => console.log(code)} /> //
export default function App() {
  return(
    
    <AppWrapper className="App" style={{height: 1214}}>
      <BackgroundSlider 
        images={[background, hongkong1, hongkong2, hongkong3]}
        duration={10}
        transition={2}
      >
      </BackgroundSlider>
      <Router>
          <Routes>
                  <Route exact path='/' element={< HomeLanding />}></Route>
          </Routes>
      </Router>
    </AppWrapper>
  )
}
