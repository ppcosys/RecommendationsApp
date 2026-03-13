import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container as MUIContainer,
} from '@mui/material';
import { NavLink } from 'react-router-dom';
import ToggleColorModeButton from './ToggleColorModeButton';

const linkStyle = {
  color: 'inherit',
  textDecoration: 'none',
  marginRight: '1rem',
};

export default function NavBar() {
  return (
    <AppBar position="fixed" sx={{ bgcolor: 'teal' }}>
      <MUIContainer maxWidth="lg">
        <Toolbar disableGutters>
          {/* LOGO + NAZWA */}
          <Box
            component={NavLink}
            to="/"
            sx={{
              display: 'flex',
              alignItems: 'center',
              color: 'inherit',
              textDecoration: 'none',
              flexGrow: 1,
            }}
          >
            <img
              src="/assets/logo.png"
              alt="logo"
              style={{ marginRight: '10px', height: '30px' }}
            />
            <Typography variant="h6" noWrap>
              Recommendations
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Button color="inherit" component={NavLink} to="/recommendations" sx={linkStyle}>
              Recommendations
            </Button>
            <Button color="inherit" component={NavLink} to="/about" sx={linkStyle}>
              About
            </Button>
            <Button color="inherit" component={NavLink} to="/errors" sx={linkStyle}>
              Errors
            </Button>
            <Button
              component={NavLink}
              to="/createRecommendation"
              variant="contained"
              color="success"
              sx={{ ml: 2 }}
            >
              Create Recommendation
            </Button>
            
            <Box sx={{ ml: 2 }}>
              <ToggleColorModeButton />
            </Box>
          </Box>
        </Toolbar>
      </MUIContainer>
    </AppBar>
  );
}
