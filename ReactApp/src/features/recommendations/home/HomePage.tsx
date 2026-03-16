import { Box } from '@mui/material';
import HeroSection from './components/HeroSection';
import CategoriesSection from './components/CategoriesSection';
import FeaturedRecommendationsSection from './components/FeaturedRecommendationsSection';
import HowItWorksSection from './components/HowItWorksSection';
import CallToActionSection from './components/CallToActionSection';

export default function HomePage() {
  return (
    <Box component="main">
      <HeroSection />
      <CategoriesSection />
      <FeaturedRecommendationsSection />
      <HowItWorksSection />
      <CallToActionSection />
    </Box>
  );
}