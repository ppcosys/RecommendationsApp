import { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../../app/stores/store';
import LoadingComponent from '../../../app/layout/LoadingComponents';
import RecommendationList from './RecommendationList';
import RecommendationFilters from './RecommendationsFilters';
import { Container, Grid } from '@mui/material';

export default observer(function RecommendationDashboard() {
  const { recommendationStore } = useStore();
  const { loadRecommendations, recommendationRegistry } = recommendationStore;

  useEffect(() => {
    if (recommendationRegistry.size <= 1) loadRecommendations();
  }, [loadRecommendations, recommendationRegistry.size]);

  if (recommendationStore.loadingInitial)
    return <LoadingComponent content="Loading app" />;

  return (
    <Container maxWidth="lg" sx={{ mt: 2 }}>
      <Grid container spacing={3}>
        <Grid size={{ xs: 12, md:8 }}>
          <RecommendationList />
        </Grid>
        <Grid size={{ xs: 12, md:4 }}>
          <RecommendationFilters />
        </Grid>
      </Grid>
    </Container>
  );
});