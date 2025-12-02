import { Link } from 'react-router-dom';
import { Container, Typography, Box } from '@mui/material';

export default function HomePage() {
  return (
    <Container maxWidth="md">
      <Box sx={{ mt: 10 }}>
        <Typography variant="h3" gutterBottom>
          Home Page
        </Typography>
        <Typography variant="h5">
          Go to <Link to="/recommendations">Recommendations</Link>
        </Typography>
      </Box>
    </Container>
  );
}
