import React, {Component} from 'react'
import styled from "styled-components";
import DeviceOrientation, { Orientation } from 'react-screen-orientation'



const WhiteTextTypography = styled.p`
  position: relative;
  margin-top: 20px;
  color: #FFFFFF;
  font-size: 20px;
`;

const CameraWrapper = styled.div`
  position:relative;
  width: 100%;
`;
export default class ARmaplanding extends Component {
 
  render () {
    return (
      <div>
        <DeviceOrientation lockOrientation={'landscape'}>
          {/* Will only be in DOM in landscape */}
          <Orientation orientation='landscape' alwaysRender={false}>
            <CameraWrapper>
              <WhiteTextTypography>Only visible in landscape</WhiteTextTypography>
              <iframe title= "ARMappage" src="https://venuschanhk.github.io/jllmapar.github.io/polygon.html"></iframe>
            </CameraWrapper>
          </Orientation>
          <Orientation orientation='portrait' alwaysRender={false}>
            <div>
              <WhiteTextTypography>Please rotate your phone to landscape mode</WhiteTextTypography>
            </div>
          </Orientation>
        </DeviceOrientation>
      </div>
      
    )
  }
}