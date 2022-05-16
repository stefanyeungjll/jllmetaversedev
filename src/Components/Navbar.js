import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import styled from "styled-components";

const Navbartext = styled(Typography)`
    margin-left: 10px;
`
const handleClose = () => {
    console.log('hello clicked')
};
export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
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
          <Navbartext>JLL Metaverse</Navbartext>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
