import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import styled from "styled-components";
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
const IconbuttonWrapper = styled.div`
    position: absolute;
    right: 1px;
    top: 6px;
`;

const JLLLogo = styled.div`
  position: relative;
  left: 0;
`;

const handleClose = () => {
    console.log('hello clicked')
};

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 , backgroundColor: 'primary.light',}}>
      <AppBar position="static" color="inherit">
        <Toolbar>
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
            <IconbuttonWrapper>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                    onClick= {handleClose}
                >
                    <MenuIcon />
                </IconButton>
            </IconbuttonWrapper>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
