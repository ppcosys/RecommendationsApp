import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../../app/stores/store';
import { useParams } from 'react-router-dom';
import LoadingComponent from '../../../app/layout/LoadingComponents';
import RecommendationDetailedHeader from './RecommendationDetailedHeader';
import RecommendationDetailedInfo from './RecommendationDetailedInfo';
import RecommendationDetailedChat from './RecommendationDetailedChat';
import RecommendationDetailedSidebar from './RecommendationDetailedSidebar';

// ⬇️ MUI Components
import { Grid, Box } from '@mui/material';

export default observer(function RecommendationDetails() {
  const { recommendationStore } = useStore();
  const {
    selectedRecommendation: recommendation,
    loadRecommendation,
    loadingInitial,
  } = recommendationStore;
  const { id } = useParams();

  useEffect(() => {
    if (id) loadRecommendation(id);
  }, [id, loadRecommendation]);

  if (loadingInitial || !recommendation)
    return <LoadingComponent content="Loading recommendation..." />;

  return (
    <Box sx={{ mt: 4 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={8}>
          <RecommendationDetailedHeader recommendation={recommendation} />
          <RecommendationDetailedInfo recommendation={recommendation} />
          <RecommendationDetailedChat />
        </Grid>
        <Grid item xs={12} md={4}>
          <RecommendationDetailedSidebar />
        </Grid>
      </Grid>
    </Box>
  );
});