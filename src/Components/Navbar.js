import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import styled from "styled-components";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import BasicMenu from './basicmenu';
const IconbuttonWrapper = styled.div`
    position: absolute;
    right: 1px;
    top: 6px;
`;

const JLLLogo = styled.div`
  position: relative;
  left: 0;
`;



export default function ButtonAppBar() {
    const [anchorEl, setAnchorEl] = React.useState(false);
    const open = Boolean(anchorEl);
    const handleClose = () => {
        setAnchorEl((prev) => !prev)
    };
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
                <BasicMenu></BasicMenu>
            </IconbuttonWrapper>
            <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                    'aria-labelledby': 'basic-button',
                    }}
                >
                    <MenuItem onClick={handleClose}>Home Page</MenuItem>
                    <MenuItem onClick={handleClose}>AR view</MenuItem>
            </Menu>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
