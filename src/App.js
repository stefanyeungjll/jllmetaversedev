import './App.css';
import styled from "styled-components";
import React from "react";
import {
  First,
  Second,
  Third,
  Fourth
} from '../src/assets/Images';

import BackgroundSlider from 'react-background-slider'

import HomeLanding from "./Page/HomePage";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";




const AppWrapper = styled.div`
  position: relative;
  max-width: 1264px;
  overflow: hidden;
  height: 100vh;
  margin: auto;
`;

// <ReactiveQR onCode={(code) => console.log(code)} /> //
export default function App() {
  return(
    
    <AppWrapper className="App">
      <BackgroundSlider 
        images={[First, Second, Third, Fourth]}
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
