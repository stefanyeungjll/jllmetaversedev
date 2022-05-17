import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const MenuWrapper = styled(Menu)`
    position: absolute;
    right: 1px;
    top: 1px;
`;
export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
          size="large"
          edge="start"
          color="inherit"
          sx={{ mr: 2 }}
          id="basic-button"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
      >
          <MenuIcon />
      </IconButton>
        <MenuWrapper
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          <MenuItem onClick={handleClose}>
            <Link to= "/"> Home Page </Link>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <a href="3dbuildings.html"> AR View </a>
          </MenuItem>
        </MenuWrapper>
    </div>
  );
}