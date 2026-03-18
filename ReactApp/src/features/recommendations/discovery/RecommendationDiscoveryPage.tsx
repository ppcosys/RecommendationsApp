import { useEffect } from "react";
import { Box, Container, Typography } from "@mui/material";
import { observer } from "mobx-react-lite";
import RecommendationDiscoveryGrid from "./RecommendationDiscoveryGrid";
import { useStore } from "../../../app/stores/store";
import LoadingComponent from "../../../app/layout/LoadingComponents";

function RecommendationDiscoveryPage() {
  const { recommendationStore } = useStore();
  const { loadRecommendations, loadingInitial, recommendationsByDate } =
    recommendationStore;

  useEffect(() => {
    loadRecommendations();
  }, [loadRecommendations]);

  if (loadingInitial) {
    return <LoadingComponent content="Loading recommendations..." />;
  }

  if (recommendationsByDate.length === 0) {
    return (
      <Box sx={{ py: 6 }}>
        <Container maxWidth="md" sx={{ textAlign: "center" }}>
          <Typography variant="h4" sx={{ mb: 2, fontWeight: 600 }}>
            No recommendations yet
          </Typography>

          <Typography variant="body1" color="text.secondary">
            Be the first to add something interesting.
          </Typography>
        </Container>
      </Box>
    );
  }

  return (
    <Box sx={{ py: 6 }}>
      <Container maxWidth="lg">
        <Typography variant="h3" sx={{ mb: 4, fontWeight: 700 }}>
          Discover recommendations
        </Typography>

        <RecommendationDiscoveryGrid items={recommendationsByDate} />
      </Container>
    </Box>
  );
}

export default observer(RecommendationDiscoveryPage);