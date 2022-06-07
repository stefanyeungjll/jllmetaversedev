import styled from "styled-components";
// import Camera from "../Components/Display";
import React, { useState } from "react";
// import SearchAppBar from "../Components/Navbar"; might be userful for later
import Logo from "../assets/JLLlogo.png";
import {
  Wechaticon,
  Linkedinicon
} from '../assets/Images';

const bodytext = "We incorporate big data with Geographic Information System (GIS) to provide accurate analysis and insights of different market sectors, enabling you to make the best-informed business decisions. GIS Consultancy includes but not limited to site selections, portfolio and competitor analysis."



const WhiteTextTypography = styled.p`
  position: relative;
  margin-top: 20px;
  color: #FFFFFF;
  align-content: center;
  text-align: center;
  font-size: 10px;
  padding-left: 10px;
  padding-right: 10px;
  @media screen 
  and (min-device-width: 1264px) 
  and (max-device-width: 1600px) 
  and (-webkit-min-device-pixel-ratio: 1) { 
    font-size: 52px;
  }
`;

const HoverButton = styled.button`
  position: relative;
  margin-top: 20px;
  width: 100%;
  max-width: 632px;
  font-family: Arial;
  background-color: #FFFFFF;
  align-content: center;
  text-align: center;
  height: 50px;
  border: 2px solid #FFFFFF;
  border-radius: 15px;
  &:hover {
    background: Transparent no-repeat;
    color: #FFFFFF;
  }
  @media screen 
  and (max-device-width: 414px) 
  and (-webkit-min-device-pixel-ratio: 1) { 
    font-size: 10px;
    width: 100%
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
  text-decoration: none;
  font-weight: bold;
  color: black;
  &:hover {
    color: #FFFFFF;
  }
`;

const PageWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 1264px;
  height: 100vh;
  margin: auto;
  background: rgba(0,0,0,.5);
`;

const BodyWrapper = styled.div`
  position: relative;
  width: 90%;
  max-width: 1264px;
  overflow: scroll;
  height: 100vh;
  margin: auto;
  @media screen 
  and (min-device-width: 375px) 
  and (max-device-width: 414px) 
  and (-webkit-min-device-pixel-ratio: 1) { 
    width: 85%;
  }
  @media screen 
  and (min-device-width: 415px) 
  and (max-device-width: 1264px) 
  and (-webkit-min-device-pixel-ratio: 1) { 

  }
`;

const JLLLogo = styled.img`
  position: absolute;
  object-fit: contain;
  left: 0;
  top: 0;
  width: 85px;
  height: 54px;
`;

const Wechaticonimage = styled.img`
  position: relative;
  object-fit: contain;
  @media screen 
  and (min-device-width: 375px) 
  and (max-device-width: 768px) 
  and (-webkit-min-device-pixel-ratio: 1) { 
    width: 45px;
    height: 44px;
  }
  width: 54px;
  height: 34px;
`;

const Linkediniconimage = styled.img`
  position: relative;
  object-fit: contain;
  @media screen 
  and (min-device-width: 375px) 
  and (max-device-width: 768px) 
  and (-webkit-min-device-pixel-ratio: 1) { 
    width: 31px;
    height: 30px;
    margin-left: 15px;
    padding-bottom: 5px;
  }
  width: 54px;
  height: 34px;
`;

const Icongroupwrapper = styled.div`
  position: relative;
  right: 0;
  max-width: 632px;
  margin: 15px auto;
`;

const Icongroup = styled.div`
  position: absolute;
  right: 0;
`;

const ButtongroupWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center
  height: 500px;
  width: 100%;
`;
export default function HomeLanding(){
    const [iscameraOpen, setIscameraOpen] = useState(false);
    console.log(iscameraOpen);
    return (
      <PageWrapper>
        <JLLLogo src={Logo}></JLLLogo>
        {/* <SearchAppBar></SearchAppBar> */}
        <BodyWrapper id="BodyWrapper">
          <Title>GIS Consultancy</Title>
            <WhiteTextTypography variant="body2">
              {bodytext}
            </WhiteTextTypography>
            <ButtongroupWrapper id="buttongroupwrapper">
              <LinkWrapper href="https://venuschanhk.github.io/jllmapar.github.io/polygon.html">
                <HoverButton id= "button to ARmap" onClick={() => setIscameraOpen((prev) => !prev)} title="The Map">The Map
                </HoverButton>
              </LinkWrapper>
              
              
              <LinkWrapper href="https://www.jll.com.hk/">
                <HoverButton id= "button to JLL site" onClick={console.log('hello clicked second button')}>
                  JLL Official Website
                </HoverButton>
              </LinkWrapper>


             
              <LinkWrapper href="https://www.jll.com.hk/">
                <HoverButton id= "button to GIS page" onClick={console.log('hello clicked second button')}>
                  GIS Consultancy Service
                </HoverButton> 
              </LinkWrapper>

              <LinkWrapper href="https://www.jll.com.hk/">
                <HoverButton onClick={console.log('hello clicked second button')}>
                  Dashboard 
                </HoverButton>
              </LinkWrapper>
              {/* {iscameraOpen && <Camera></Camera>} */}
            </ButtongroupWrapper>
            <Icongroupwrapper id="icongroup">
              <Icongroup>
                <a href="http://weixin.qq.com/r/RxKWjgPE7F6TrUft90dV">
                  <Wechaticonimage src={Wechaticon}></Wechaticonimage>
                </a>
                <a href="https://www.linkedin.com/company/jll-hong-kong/">
                 <Linkediniconimage src = {Linkedinicon}></Linkediniconimage>
                </a>
              </Icongroup>
            </Icongroupwrapper>
        </BodyWrapper>
      </PageWrapper>
    );
  }