import { Link } from 'react-router-dom';
import { Container, Typography, Box, Grid } from '@mui/material';

export default function HomePage() {
  return (
    <Container maxWidth="lg">
      
      <Grid>
        
      </Grid>

      <Box sx={{ mt: 2, bgcolor: "tomato" }}>
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
