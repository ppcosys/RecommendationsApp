import { observer } from 'mobx-react-lite';
import React from 'react';
import {
  Box,
  Paper,
  Typography,
  Button,
  Stack,
  Avatar
} from '@mui/material';
import { Recommendation } from '../../../app/models/recommendation';

interface Props {
  recommendation: Recommendation;
}

const imageContainerStyle = {
  position: 'relative',
  width: '100%',
  height: '300px',
  overflow: 'hidden'
};

const imageStyle = {
  width: '100%',
  height: '100%',
  objectFit: 'cover' as const,
  filter: 'brightness(30%)'
};

const textOverlayStyle = {
  position: 'absolute' as const,
  bottom: '10%',
  left: '5%',
  color: 'white'
};

export default observer(function RecommendationDetailedHeader({ recommendation }: Props) {
  return (
    <Paper elevation={3}>
      {/* Górna część z obrazem i tekstem */}
      <Box sx={imageContainerStyle}>
        <img
          src={`/assets/categoryImages/${recommendation.category}.jpg`}
          alt={recommendation.title}
          style={imageStyle}
        />
        <Box sx={textOverlayStyle}>
          <Typography variant="h3" sx={{ color: 'white', fontWeight: 500 }}>
            {recommendation.title}
          </Typography>
          <Typography variant="subtitle1" sx={{ color: 'white' }}>
            {recommendation.date}
          </Typography>
          <Typography variant="subtitle2" sx={{ color: 'white' }}>
            Hosted by <strong>Username</strong>
          </Typography>
        </Box>
      </Box>

      {/* Dolna część z przyciskami */}
      <Box sx={{ p: 2 }}>
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <Stack direction="row" spacing={1}>
            <Button variant="contained" color="success">
              Vote Recommendation
            </Button>
            <Button variant="outlined">Cancel Vote</Button>
          </Stack>
          <Button variant="contained" color="warning">
            Manage Recommendation
          </Button>
        </Stack>
      </Box>
    </Paper>
  );
});
