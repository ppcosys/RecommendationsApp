import React from 'react';
import { observer } from 'mobx-react-lite';
import { Recommendation } from '../../../app/models/recommendation';
import { useStore } from '../../../app/stores/store';
import { Link } from 'react-router-dom';
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Avatar,
  Grid,
  Button,
  Box,
  Stack
} from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocationOnIcon from '@mui/icons-material/LocationOn';

interface Props {
  recommendation: Recommendation;
}

export default observer(function RecommendationListItem({ recommendation }: Props) {
  const { recommendationStore } = useStore();
  const { deleteRecommendation, loading } = recommendationStore;

  return (
    <Card variant="outlined" sx={{ mb: 2 }}>
      <CardContent>
        <Grid container spacing={2}>
          <Grid item>
            <Avatar src="/assets/user.png" alt="User" sx={{ width: 56, height: 56 }} />
          </Grid>
          <Grid item xs>
            <Typography variant="h6" component={Link} to={`/recommendations/${recommendation.id}`} sx={{ textDecoration: 'none' }}>
              {recommendation.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              UsernamePlaceholder
            </Typography>
          </Grid>
        </Grid>

        <Stack direction="row" spacing={2} mt={2}>
          <Box display="flex" alignItems="center">
            <AccessTimeIcon fontSize="small" sx={{ mr: 0.5 }} />
            <Typography variant="body2">{recommendation.date}</Typography>
          </Box>
          <Box display="flex" alignItems="center">
            <LocationOnIcon fontSize="small" sx={{ mr: 0.5 }} />
            <Typography variant="body2">{recommendation.place}</Typography>
          </Box>
        </Stack>

        <Typography mt={2} variant="body2" color="text.primary">
          {recommendation.description}
        </Typography>
      </CardContent>

      <CardActions sx={{ justifyContent: 'flex-end' }}>
        <Button
          component={Link}
          to={`/recommendations/${recommendation.id}`}
          variant="contained"
          color="primary"
        >
          View
        </Button>
      </CardActions>
    </Card>
  );
});
