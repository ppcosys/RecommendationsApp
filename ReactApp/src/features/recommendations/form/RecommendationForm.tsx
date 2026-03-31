import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import { useStore } from "../../../app/stores/store";
import { useNavigate, useParams, Link } from "react-router-dom";
import { Recommendation } from "../../../app/models/recommendation";
import LoadingComponent from "../../../app/layout/LoadingComponents";
import { v4 as uuid } from "uuid";
import {
  Box,
  Button,
  Container,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

export default observer(function RecommendationForm() {
  const { recommendationStore } = useStore();
  const {
    createRecommendation,
    updateRecommendation,
    loading,
    loadRecommendation,
    loadingInitial,
  } = recommendationStore;

  const { id } = useParams();
  const navigate = useNavigate();

  const [recommendation, setRecommendation] = useState<Recommendation>({
    id: "",
    title: "",
    category: "",
    link: "",
    date: "",
    description: "",
    country: "",
    city: "",
    place: "",
  });

  useEffect(() => {
    if (id) {
      loadRecommendation(id).then((r) => {
        if (r) setRecommendation(r);
      });
    }
  }, [id, loadRecommendation]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!recommendation.id) {
      const newRecommendation = {
        ...recommendation,
        id: uuid(),
      };

      await createRecommendation(newRecommendation);
      navigate(`/recommendations/${newRecommendation.id}`);
    } else {
      await updateRecommendation(recommendation);
      navigate(`/recommendations/${recommendation.id}`);
    }
  }

  function handleInputChange(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = event.target;
    setRecommendation((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  if (loadingInitial) {
    return <LoadingComponent content="Loading recommendation..." />;
  }

  return (
    <Container maxWidth="sm" sx={{ mt: 10 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h5" gutterBottom>
          {id ? "Edit Recommendation" : "Create Recommendation"}
        </Typography>

        <Box component="form" onSubmit={handleSubmit} autoComplete="off">
          <Stack spacing={2}>
            <TextField
              label="Title"
              name="title"
              value={recommendation.title}
              onChange={handleInputChange}
              fullWidth
            />

            <TextField
              label="Category"
              name="category"
              value={recommendation.category}
              onChange={handleInputChange}
              fullWidth
            />

            <TextField
              label="Link"
              name="link"
              value={recommendation.link}
              onChange={handleInputChange}
              fullWidth
            />

            <TextField
              label="Date"
              type="date"
              name="date"
              value={recommendation.date}
              onChange={handleInputChange}
              InputLabelProps={{ shrink: true }}
              fullWidth
            />

            <TextField
              label="Description"
              name="description"
              value={recommendation.description}
              onChange={handleInputChange}
              multiline
              rows={3}
              fullWidth
            />

            <TextField
              label="Country"
              name="country"
              value={recommendation.country}
              onChange={handleInputChange}
              fullWidth
            />

            <TextField
              label="City"
              name="city"
              value={recommendation.city}
              onChange={handleInputChange}
              fullWidth
            />

            <TextField
              label="Place"
              name="place"
              value={recommendation.place}
              onChange={handleInputChange}
              fullWidth
            />

            <Stack
              direction="row"
              spacing={2}
              justifyContent="flex-end"
              sx={{ mt: 2 }}
            >
              <Button variant="contained" type="submit" disabled={loading}>
                Submit
              </Button>

              <Button
                variant="outlined"
                color="inherit"
                component={Link}
                to="/recommendations"
              >
                Cancel
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Paper>
    </Container>
  );
});