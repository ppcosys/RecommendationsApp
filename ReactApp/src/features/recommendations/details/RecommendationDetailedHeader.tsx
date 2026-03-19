import { observer } from 'mobx-react-lite';
import { Box, Chip, Paper, Typography } from '@mui/material';
import { Recommendation } from '../../../app/models/recommendation';

interface Props {
  recommendation: Recommendation;
}

const imageContainerStyle = {
  position: 'relative',
  width: '100%',
  height: '320px',
  overflow: 'hidden',
  borderTopLeftRadius: '4px',
  borderTopRightRadius: '4px',
};

const imageStyle = {
  width: '100%',
  height: '100%',
  objectFit: 'cover' as const,
  filter: 'brightness(45%)',
};

const textOverlayStyle = {
  position: 'absolute' as const,
  bottom: '10%',
  left: '5%',
  right: '5%',
  color: 'white',
};

function getCategoryImage(category: string) {
  const normalized = category.toLowerCase();

  switch (normalized) {
    case 'food':
      return '/assets/categoryImages/food.jpg';
    case 'music':
      return '/assets/categoryImages/music.jpg';
    case 'travel':
      return '/assets/categoryImages/travel.jpg';
    case 'film':
      return '/assets/categoryImages/film.jpg';
    case 'culture':
      return '/assets/categoryImages/culture.jpg';
    case 'drinks':
      return '/assets/categoryImages/drinks.jpg';
    default:
      return '/assets/placeholder.png';
  }
}

export default observer(function RecommendationDetailedHeader({
  recommendation,
}: Props) {
  return (
    <Paper elevation={3} sx={{ mb: 3, overflow: 'hidden' }}>
      <Box sx={imageContainerStyle}>
        <img
          src={getCategoryImage(recommendation.category)}
          alt={recommendation.title}
          style={imageStyle}
        />

        <Box sx={textOverlayStyle}>
          <Chip
            label={recommendation.category}
            size="small"
            sx={{
              mb: 2,
              bgcolor: 'rgba(255,255,255,0.16)',
              color: 'white',
              fontWeight: 600,
            }}
          />

          <Typography
            variant="h3"
            sx={{
              color: 'white',
              fontWeight: 700,
              mb: 1,
              fontSize: { xs: '2rem', md: '2.75rem' },
            }}
          >
            {recommendation.title}
          </Typography>

          <Typography
            variant="subtitle1"
            sx={{ color: 'rgba(255,255,255,0.9)', mb: 0.5 }}
          >
            {recommendation.date}
          </Typography>

          <Typography
            variant="subtitle2"
            sx={{ color: 'rgba(255,255,255,0.85)' }}
          >
            {[recommendation.place, recommendation.city, recommendation.country]
              .filter(Boolean)
              .join(', ')}
          </Typography>
        </Box>
      </Box>
    </Paper>
  );
});