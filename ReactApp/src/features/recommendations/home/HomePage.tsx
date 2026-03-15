import { Box } from '@mui/material';
import HeroSection from './components/HeroSection';
import CategoriesSection from './components/CategoriesSection';

export default function HomePage() {
  return (
    <Box component="main">
      <HeroSection />
      <CategoriesSection />
    </Box>
  );
}