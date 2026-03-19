import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import { Box, Container } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useStore } from '../../../app/stores/store';
import LoadingComponent from '../../../app/layout/LoadingComponents';
import RecommendationDetailedHeader from './RecommendationDetailedHeader';
import RecommendationDetailedInfo from './RecommendationDetailedInfo';

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

  if (loadingInitial || !recommendation) {
    return <LoadingComponent content="Loading recommendation..." />;
  }

  return (
    <Box sx={{ py: 4 }}>
      <Container maxWidth="md">
        <RecommendationDetailedHeader recommendation={recommendation} />
        <RecommendationDetailedInfo recommendation={recommendation} />
      </Container>
    </Box>
  );
});