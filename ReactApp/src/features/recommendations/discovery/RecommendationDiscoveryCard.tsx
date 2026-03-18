import { Box, Chip, Paper, Typography } from "@mui/material";
import PlaceIcon from "@mui/icons-material/Place";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import { Link as RouterLink } from "react-router-dom";

interface Props {
  id: string;
  title: string;
  description: string;
  category: string;
  city: string;
  place: string;
  date: string;
  imageUrl: string;
}

export default function RecommendationDiscoveryCard({
  id,
  title,
  description,
  category,
  city,
  place,
  date,
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
      <Box sx={{ display: "flex", gap: 2, alignItems: "stretch" }}>
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

        <Box
          sx={{
            flex: 1,
            minWidth: 0,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: 1,
              gap: 2,
            }}
          >
            <Chip label={category} size="small" />

            <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
              <CalendarTodayIcon sx={{ fontSize: 16 }} />
              <Typography variant="body2" fontWeight={600}>
                {date}
              </Typography>
            </Box>
          </Box>

          <Box sx={{ minWidth: 0 }}>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 0.5 }}>
              {title}
            </Typography>

            <Typography
              variant="body2"
              color="text.secondary"
              sx={{
                mb: 1,
                display: "-webkit-box",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
              }}
            >
              {description}
            </Typography>

            <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
              <PlaceIcon sx={{ fontSize: 16 }} />
              <Typography variant="body2" color="text.secondary">
                {[place, city].filter(Boolean).join(", ")}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Paper>
  );
}