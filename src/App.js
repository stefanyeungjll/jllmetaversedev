import './App.css';
import styled from "styled-components";
import React from "react";
import EsriMap from "./Page/MapPage";

import HomeLanding from "./Page/HomePage";
import ARmaplanding from "./Page/ARMapPage";
import {
  First,
} from './assets/Images';

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
  background:url(${First}); 
  background-position: center;
  background-size: cover;
  opacity: 1;
`;

export default function App() {
  return(
      <AppWrapper className="App" id='Appwrapper'>
            <Router>
                <Routes>
                        <Route exact path='/' element={< HomeLanding />}></Route>
                        <Route exact path='/armap' element={< ARmaplanding />}></Route>
                        <Route exact path='/map' element= {<EsriMap id="e691172598f04ea8881cd2a4adaa45ba" />}></Route>
                </Routes>
            </Router>
      </AppWrapper>
  )
}
