import { Box } from "@mui/material";
import RecommendationDiscoveryCard from "./RecommendationDiscoveryCard";

export default function RecommendationDiscoveryGrid() {
  return (
    <Box
      sx={{
        display: "grid",
        gap: 3,
        gridTemplateColumns: {
          xs: "1fr",
          md: "1fr 1fr",
        },
      }}
    >
      <RecommendationDiscoveryCard
        id="1"
        title="Best sushi in Warsaw"
        description="Amazing sushi restaurant in Mokotów."
        category="Place"
        rating={4.7}
        imageUrl="https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=600&q=80"
      />

      <RecommendationDiscoveryCard
        id="2"
        title="Weekend jazz concert"
        description="Live jazz event in the city center."
        category="Event"
        rating={4.5}
        imageUrl="https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=600&q=80"
      />

      <RecommendationDiscoveryCard
        id="3"
        title="Noise cancelling headphones"
        description="Great for working and travel."
        category="Product"
        rating={4.8}
        imageUrl="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80"
      />

      <RecommendationDiscoveryCard
        id="4"
        title="Italian restaurant"
        description="Authentic pasta and pizza."
        category="Place"
        rating={4.6}
        imageUrl="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&q=80"
      />
    </Box>
  );
}