import { Box } from "@mui/material";
import { Recommendation } from "../../../app/models/recommendation";
import RecommendationDiscoveryCard from "./RecommendationDiscoveryCard";

interface Props {
  items: Recommendation[];
}

function getCategoryImage(category: string) {
  const normalized = category.toLowerCase();

  switch (normalized) {
    case "food":
      return "/assets/categoryImages/food.jpg";
    case "music":
      return "/assets/categoryImages/music.jpg";
    case "travel":
      return "/assets/categoryImages/travel.jpg";
    case "film":
      return "/assets/categoryImages/film.jpg";
    case "culture":
      return "/assets/categoryImages/culture.jpg";
    case "drinks":
      return "/assets/categoryImages/drinks.jpg";
    default:
      return "/assets/placeholder.png";
  }
}

export default function RecommendationDiscoveryGrid({ items }: Props) {
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
      {items.map((recommendation) => (
        <RecommendationDiscoveryCard
          key={recommendation.id}
          id={recommendation.id}
          title={recommendation.title}
          description={recommendation.description}
          category={recommendation.category}
          city={recommendation.city}
          place={recommendation.place}
          date={recommendation.date}
          imageUrl={getCategoryImage(recommendation.category)}
        />
      ))}
    </Box>
  );
}