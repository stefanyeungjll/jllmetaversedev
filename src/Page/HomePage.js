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
`
const HoverButton = styled.button`
  position: relative;
  margin-top: 20px;
  font-family: Arial;
  background-color: #FFFFFF;
  align-content: center;
  text-align: center;
  height: 50px;
  border: 2px solid #FFFFFF;
  border-radius: 15px;
  @media screen 
  and (min-device-width: 375px) 
  and (max-device-width: 768px) 
  and (-webkit-min-device-pixel-ratio: 1) { 
    font-size: 10px;
    width: 335px;
  }
  &:hover {
    background: Transparent no-repeat;
    color: #FFFFFF;
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
  overflow: hidden;
  height: 100vh;
  margin: auto;
  background: rgba(0,0,0,.5);
`;

const BodyWrapper = styled.div`
  position: relative;
  width: 90%;
  max-width: 1264px;
  overflow: hidden;
  height: 100vh;
  margin: auto;
  @media screen 
  and (min-device-width: 375px) 
  and (max-device-width: 768px) 
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
  position: absolute;
  margin-top: 5px;
  margin-right: 4px;
  right: 0;
  @media screen 
  and (min-device-width: 376px) 
  and (max-device-width: 413px) 
  and (-webkit-min-device-pixel-ratio: 1) { 
    margin-right: 11px;
  }
  @media screen 
  and (min-device-width: 414px) 
  and (max-device-width: 500px) 
  and (-webkit-min-device-pixel-ratio: 1) { 
    margin-right: 20px;
  }
`;

const ButtongroupWrapper = styled.div`
  position: relative;
  height: 500px;
  width: 100%;
  and (min-device-width: 375px) 
  and (max-device-width: 768px) 
  and (-webkit-min-device-pixel-ratio: 1) { 
    width: 337.5px;
    height: 800px;
  }
`;
export default function HomeLanding(){
    const [iscameraOpen, setIscameraOpen] = useState(false);
    console.log(iscameraOpen);
    return (
      <PageWrapper>
        <JLLLogo src={Logo}></JLLLogo>
        {/* <SearchAppBar></SearchAppBar> */}
        <BodyWrapper>
          <Title>GIS Consultancy</Title>
            <WhiteTextTypography variant="body2">
              {bodytext}
            </WhiteTextTypography>
            <ButtongroupWrapper>
              <HoverButton onClick={() => setIscameraOpen((prev) => !prev)}>
                <LinkWrapper href="https://venuschanhk.github.io/jllmapar.github.io/polygon.html">The Map</LinkWrapper>
              </HoverButton>
              <HoverButton onClick={console.log('hello clicked second button')}>
                <LinkWrapper href="https://www.jll.com.hk/">JLL Official Website</LinkWrapper>
              </HoverButton>
              <HoverButton onClick={console.log('hello clicked second button')}>
                <LinkWrapper href="https://www.jll.com.hk/">GIS Consultancy Service</LinkWrapper>
              </HoverButton>
              <HoverButton onClick={console.log('hello clicked second button')}>
                <LinkWrapper href="https://www.jll.com.hk/">Dashboard</LinkWrapper>
              </HoverButton>
              {/* {iscameraOpen && <Camera></Camera>} */}
              <Icongroupwrapper>
                <a href="http://weixin.qq.com/r/RxKWjgPE7F6TrUft90dV">
                  <Wechaticonimage src={Wechaticon}></Wechaticonimage>
                </a>
                <a href="https://www.linkedin.com/company/jll-hong-kong/">
                 <Linkediniconimage src = {Linkedinicon}></Linkediniconimage>
                </a>
              </Icongroupwrapper>
            </ButtongroupWrapper>
        </BodyWrapper>
      </PageWrapper>
    );
  }