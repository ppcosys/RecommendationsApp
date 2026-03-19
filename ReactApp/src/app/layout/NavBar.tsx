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
import { APP_NAME } from '@/app/config/appConfig';

const navButtonSx = {
  marginRight: '1rem',
  textTransform: 'none',
  borderRadius: 2,
  color: 'rgba(255,255,255,0.7)',
  transition: 'all 0.2s ease',
  '&:hover': {
    backgroundColor: 'rgba(255,255,255,0.08)',
    color: '#fff',
  },
  '&.active': {
    color: '#fff',
    fontWeight: 600,
    backgroundColor: 'rgba(255,255,255,0.15)',
  },
};

export default function NavBar() {
  return (
    <AppBar position="fixed" sx={{ bgcolor: 'grey' }}>
      <MUIContainer maxWidth="lg">
        <Toolbar disableGutters>
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
              {APP_NAME}
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Button component={NavLink} to="/discover" sx={navButtonSx}>
              Discover
            </Button>

            <Button component={NavLink} to="/recommendations" sx={navButtonSx}>
              My Recommendations
            </Button>

            <Button component={NavLink} to="/about" sx={navButtonSx}>
              About
            </Button>

            <Button component={NavLink} to="/errors" sx={navButtonSx}>
              Errors
            </Button>

            <Button
              component={NavLink}
              to="/createRecommendation"
              variant="contained"
              color="success"
              sx={{ ml: 2, textTransform: 'none', fontWeight: 600 }}
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