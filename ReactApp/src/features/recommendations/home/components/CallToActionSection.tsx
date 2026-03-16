import { Box, Button, Container, Typography } from '@mui/material';

export default function CallToActionSection() {
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 8, md: 10 },
        bgcolor: 'grey.50',
      }}
    >
      <Container maxWidth="md">
        <Box sx={{ textAlign: 'center' }}>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '1.8rem', md: '2.2rem' },
              fontWeight: 700,
              lineHeight: 1.3,
              mb: 4,
            }}
          >
            Start discovering better recommendations today
          </Typography>

          <Button
            variant="contained"
            size="large"
            sx={{
              borderRadius: 3,
              textTransform: 'none',
              fontWeight: 600,
              px: 4,
              py: 1.4,
            }}
          >
            Get started
          </Button>
        </Box>
      </Container>
    </Box>
  );
}