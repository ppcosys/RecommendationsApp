import { Box, Container} from '@mui/material'
import HeroSection from './components/HeroSection'


export default function HomePage() {
  return (
    <Box component="main" sx={{ py: { xs: 6, md: 8 } }}>
      <Container maxWidth="lg">
        <HeroSection />
      </Container>
    </Box>
  );
}
