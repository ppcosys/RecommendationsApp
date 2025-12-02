import { observer } from 'mobx-react-lite';
import React from 'react';
import {
  Box,
  Paper,
  Grid,
  Typography
} from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import EventIcon from '@mui/icons-material/Event';
import PlaceIcon from '@mui/icons-material/Place';
import { Recommendation } from '../../../app/models/recommendation';

interface Props {
  recommendation: Recommendation;
}

export default observer(function RecommendationDetailedInfo({ recommendation }: Props) {
  return (
    <Box>
      <Paper elevation={2} sx={{ p: 2, mb: 2 }}>
        <Grid container spacing={2} alignItems="center">
          <Grid item>
            <InfoIcon color="primary" />
          </Grid>
          <Grid item xs>
            <Typography>{recommendation.description}</Typography>
          </Grid>
        </Grid>
      </Paper>

      <Paper elevation={2} sx={{ p: 2, mb: 2 }}>
        <Grid container spacing={2} alignItems="center">
          <Grid item>
            <EventIcon color="primary" />
          </Grid>
          <Grid item xs>
            <Typography>{recommendation.date}</Typography>
          </Grid>
        </Grid>
      </Paper>

      <Paper elevation={2} sx={{ p: 2 }}>
        <Grid container spacing={2} alignItems="center">
          <Grid item>
            <PlaceIcon color="primary" />
          </Grid>
          <Grid item xs>
            <Typography>{recommendation.place}, {recommendation.city}</Typography>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
});