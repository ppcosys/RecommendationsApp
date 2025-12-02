import { useStore } from '../../../app/stores/store';
import { observer } from 'mobx-react-lite';
import RecommendationListItem from './RecommendationListItem';
import { Box, Typography } from '@mui/material';

export default observer(function RecommendationList() {
  const { recommendationStore } = useStore();
  const { recommendationsByDate } = recommendationStore;

  return (
    <Box>
      {recommendationsByDate.length === 0 ? (
        <Typography variant="h6" align="center" sx={{ mt: 4 }}>
          No recommendations found.
        </Typography>
      ) : (
        recommendationsByDate.map((recommendation) => (
          <RecommendationListItem
            key={recommendation.id}
            recommendation={recommendation}
          />
        ))
      )}
    </Box>
  );
});