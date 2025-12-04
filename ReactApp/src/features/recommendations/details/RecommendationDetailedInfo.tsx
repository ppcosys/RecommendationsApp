import { observer } from 'mobx-react-lite';
import {
  Box,
  Paper,
  Grid,
  Typography
} from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import EventIcon from '@mui/icons-material/Event';
import PlaceIcon from '@mui/icons-material/Place';
import { Recommendation } from '../../../app/models/recommendation';

interface Props {
  recommendation: Recommendation;
}

export default observer(function RecommendationDetailedInfo({ recommendation }: Props) {
  return (
    <Box>
      <Paper elevation={2} sx={{ p: 2, mb: 2 }}>
        <Grid container gap={2} alignItems="center">
          <Grid>
            <InfoIcon color="primary" />
          </Grid>
          <Grid size="auto">
            <Typography>{recommendation.description}</Typography>
          </Grid>
        </Grid>
      </Paper>

      <Paper elevation={2} sx={{ p: 2, mb: 2 }}>
        <Grid container gap={2} alignItems="center">
          <Grid>
            <EventIcon color="primary" />
          </Grid>
          <Grid size="auto">
            <Typography>{recommendation.date}</Typography>
          </Grid>
        </Grid>
      </Paper>

      <Paper elevation={2} sx={{ p: 2 }}>
        <Grid container gap={2} alignItems="center">
          <Grid>
            <PlaceIcon color="primary" />
          </Grid>
          <Grid size="auto">
            <Typography>{recommendation.place}, {recommendation.city}</Typography>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
});