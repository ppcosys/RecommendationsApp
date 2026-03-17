import { Box, Container, Typography } from "@mui/material";
import RecommendationDiscoveryGrid from "./RecommendationDiscoveryGrid";

export default function RecommendationDiscoveryPage() {
  return (
    <Box sx={{ py: 6 }}>
      <Container maxWidth="lg">
        <Typography variant="h3" sx={{ mb: 4, fontWeight: 700 }}>
          Recommendation Discovery Page
        </Typography>

        <RecommendationDiscoveryGrid />
      </Container>
    </Box>
  );
}