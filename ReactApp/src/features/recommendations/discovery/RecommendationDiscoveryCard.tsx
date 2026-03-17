import { Box, Chip, Paper, Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import { Link as RouterLink } from "react-router-dom";

interface Props {
  id: string;
  title: string;
  description: string;
  category: string;
  rating: number;
  imageUrl: string;
}

export default function RecommendationDiscoveryCard({
  id,
  title,
  description,
  category,
  rating,
  imageUrl,
}: Props) {
  return (
    <Paper
      component={RouterLink}
      to={`/recommendations/${id}`}
      elevation={0}
      sx={{
        p: 2.5,
        borderRadius: 4,
        border: "1px solid",
        borderColor: "grey.200",
        transition: "transform 0.2s ease, box-shadow 0.2s ease",
        textDecoration: "none",
        color: "inherit",
        "&:hover": {
          transform: "translateY(-2px)",
          boxShadow: 3,
        },
      }}
    >
      <Box sx={{ display: "flex", gap: 2 }}>
        <Box
          component="img"
          src={imageUrl}
          alt={title}
          sx={{
            width: 96,
            height: 96,
            borderRadius: 2,
            objectFit: "cover",
            flexShrink: 0,
          }}
        />

        <Box sx={{ flex: 1 }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: 1,
            }}
          >
            <Chip label={category} size="small" />

            <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
              <StarIcon fontSize="small" />
              <Typography variant="body2">{rating}</Typography>
            </Box>
          </Box>

          <Typography variant="h6" sx={{ fontWeight: 600, mb: 0.5 }}>
            {title}
          </Typography>

          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </Box>
      </Box>
    </Paper>
  );
}
