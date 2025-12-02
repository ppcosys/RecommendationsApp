import { Box, Typography, Button, Container } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <Container maxWidth="sm" sx={{ mt: 12, textAlign: 'center' }}>
      <Box sx={{ fontSize: 80, color: 'text.secondary', mb: 2 }}>
        <SearchIcon fontSize="inherit" />
      </Box>
      <Typography variant="h5" gutterBottom>
        Resource not found.
      </Typography>
      <Button
        variant="contained"
        color="primary"
        component={Link}
        to="/recommendations"
      >
        Return to Recommendations page
      </Button>
    </Container>
  );
}