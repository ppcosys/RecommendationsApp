import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../../app/stores/store';
import LoadingComponent from '../../../app/layout/LoadingComponents';
import RecommendationList from './RecommendationList';
import RecommendationFilters from './RecommendationsFilters';
import { Grid, Box } from '@mui/material';

export default observer(function RecommendationDashboard() {
  const { recommendationStore } = useStore();
  const { loadRecommendations, recommendationRegistry } = recommendationStore;

  useEffect(() => {
    if (recommendationRegistry.size <= 1) loadRecommendations();
  }, [loadRecommendations]);

  if (recommendationStore.loadingInitial)
    return <LoadingComponent content="Loading app" />;

  return (
    <Box sx={{ mt: 10 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={8}>
          <RecommendationList />
        </Grid>
        <Grid item xs={12} md={4}>
          <RecommendationFilters />
        </Grid>
      </Grid>
    </Box>
  );
});