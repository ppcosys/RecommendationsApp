import { observer } from 'mobx-react-lite';
import { Box, Paper, Typography, Divider, Button } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import EventIcon from '@mui/icons-material/Event';
import PlaceIcon from '@mui/icons-material/Place';
import PublicIcon from '@mui/icons-material/Public';
import LinkIcon from '@mui/icons-material/Link';
import { Recommendation } from '../../../app/models/recommendation';

interface Props {
  recommendation: Recommendation;
}

const detailsRowSx = {
  display: 'flex',
  alignItems: 'flex-start',
  gap: 1.5,
};

const detailsLabelSx = {
  fontWeight: 600,
  mb: 0.5,
};

export default observer(function RecommendationDetailedInfo({
  recommendation,
}: Props) {
  const location = [recommendation.place, recommendation.city]
    .filter(Boolean)
    .join(', ');

  return (
    <Paper elevation={2} sx={{ p: 3 }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          gap: 4,
          alignItems: 'stretch',
        }}
      >
        <Box
          sx={{
            flex: 2,
            minWidth: 0,
          }}
        >
          <Box sx={detailsRowSx}>
            <InfoIcon color="primary" sx={{ mt: 0.2 }} />
            <Box>
              <Typography variant="subtitle1" sx={detailsLabelSx}>
                Description
              </Typography>
              <Typography color="text.secondary" sx={{ lineHeight: 1.7 }}>
                {recommendation.description || 'No description provided.'}
              </Typography>
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            display: { xs: 'none', md: 'block' },
          }}
        >
          <Divider orientation="vertical" flexItem />
        </Box>

        <Box
          sx={{
            flex: 1,
            minWidth: { xs: '100%', md: 260 },
            display: 'flex',
            flexDirection: 'column',
            gap: 3,
          }}
        >
          <Box sx={detailsRowSx}>
            <EventIcon color="primary" sx={{ mt: 0.2 }} />
            <Box>
              <Typography variant="subtitle1" sx={detailsLabelSx}>
                Date
              </Typography>
              <Typography color="text.secondary">
                {recommendation.date || 'Not specified'}
              </Typography>
            </Box>
          </Box>

          <Box sx={detailsRowSx}>
            <PlaceIcon color="primary" sx={{ mt: 0.2 }} />
            <Box>
              <Typography variant="subtitle1" sx={detailsLabelSx}>
                Location
              </Typography>
              <Typography color="text.secondary">
                {location || 'Not specified'}
              </Typography>
            </Box>
          </Box>

          <Box sx={detailsRowSx}>
            <PublicIcon color="primary" sx={{ mt: 0.2 }} />
            <Box>
              <Typography variant="subtitle1" sx={detailsLabelSx}>
                Country
              </Typography>
              <Typography color="text.secondary">
                {recommendation.country || 'Not specified'}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>

      {recommendation.link && (
        <>
          <Divider sx={{ my: 3 }} />
          <Box
            sx={{
              display: 'flex',
              alignItems: { xs: 'flex-start', sm: 'center' },
              flexDirection: { xs: 'column', sm: 'row' },
              gap: 2,
            }}
          >
            <Box sx={detailsRowSx}>
              <LinkIcon color="primary" sx={{ mt: 0.2 }} />
              <Box>
                <Typography variant="subtitle1" sx={detailsLabelSx}>
                  External link
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Open the related recommendation resource.
                </Typography>
              </Box>
            </Box>

            <Button
              variant="outlined"
              href={recommendation.link}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                textTransform: 'none',
                alignSelf: { xs: 'flex-start', sm: 'center' },
              }}
            >
              Open recommendation link
            </Button>
          </Box>
        </>
      )}
    </Paper>
  );
});