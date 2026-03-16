import { Box, Card, CardContent, Container, Typography } from '@mui/material';

const steps = [
  {
    number: '01',
    title: 'Search',
    description:
      'Find places, events, and products that match your interests and needs.',
  },
  {
    number: '02',
    title: 'Compare',
    description:
      'Explore recommendations and quickly compare the most relevant options.',
  },
  {
    number: '03',
    title: 'Save',
    description:
      'Keep useful recommendations for later and come back to them anytime.',
  },
];

export default function HowItWorksSection() {
  return (
    <Box component="section" sx={{ py: { xs: 6, md: 8 } }}>
      <Container maxWidth="lg">
        <Box sx={{ mb: 5, textAlign: 'center' }}>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '1.75rem', md: '2.4rem' },
              fontWeight: 700,
              mb: 1.5,
            }}
          >
            How it works
          </Typography>

          <Typography
            color="text.secondary"
            sx={{
              maxWidth: 720,
              mx: 'auto',
              fontSize: { xs: '0.95rem', md: '1.05rem' },
              lineHeight: 1.7,
            }}
          >
            Discover recommendations in a simple way — search, compare, and save
            what matters most to you.
          </Typography>
        </Box>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              md: 'repeat(3, 1fr)',
            },
            gap: 3,
          }}
        >
          {steps.map((step) => (
            <Card
              key={step.number}
              elevation={0}
              sx={{
                height: '100%',
                borderRadius: 4,
                border: (theme) => `1px solid ${theme.palette.divider}`,
              }}
            >
              <CardContent sx={{ p: 4 }}>
                <Typography
                  sx={{
                    fontSize: '0.9rem',
                    fontWeight: 700,
                    color: 'primary.main',
                    mb: 1.5,
                  }}
                >
                  {step.number}
                </Typography>

                <Typography variant="h5" sx={{ fontWeight: 700, mb: 1.5 }}>
                  {step.title}
                </Typography>

                <Typography color="text.secondary" sx={{ lineHeight: 1.7 }}>
                  {step.description}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Container>
    </Box>
  );
}