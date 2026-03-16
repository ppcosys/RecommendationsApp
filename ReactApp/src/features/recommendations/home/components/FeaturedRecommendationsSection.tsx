import { Box, Button, Card, CardContent, Container, Typography } from '@mui/material';

const featuredRecommendations = [
  {
    id: 1,
    category: 'Place',
    title: 'Cozy Café in Warsaw',
    description:
      'A quiet and stylish café perfect for focused work, relaxed meetings, or a weekend coffee break.',
  },
  {
    id: 2,
    category: 'Event',
    title: 'Weekend Tech Meetup',
    description:
      'A local meetup for developers and tech enthusiasts with talks, networking, and community discussions.',
  },
  {
    id: 3,
    category: 'Product',
    title: 'Wireless Headphones',
    description:
      'A highly rated everyday product recommendation for work, travel, and daily listening comfort.',
  },
];

export default function FeaturedRecommendationsSection() {
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
            Featured recommendations
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
            Explore a few highlighted recommendations and get a feel for the kind
            of content you will be able to discover in the platform.
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
          {featuredRecommendations.map((recommendation) => (
            <Card
              key={recommendation.id}
              elevation={0}
              sx={{
                height: '100%',
                borderRadius: 4,
                border: (theme) => `1px solid ${theme.palette.divider}`,
              }}
            >
              <CardContent
                sx={{
                  p: 4,
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                }}
              >
                <Typography
                  sx={{
                    fontSize: '0.9rem',
                    fontWeight: 700,
                    color: 'primary.main',
                    mb: 1.5,
                  }}
                >
                  {recommendation.category}
                </Typography>

                <Typography variant="h5" sx={{ fontWeight: 700, mb: 1.5 }}>
                  {recommendation.title}
                </Typography>

                <Typography
                  color="text.secondary"
                  sx={{
                    lineHeight: 1.7,
                    mb: 3,
                    flexGrow: 1,
                  }}
                >
                  {recommendation.description}
                </Typography>

                <Button
                  variant="outlined"
                  sx={{
                    alignSelf: 'flex-start',
                    borderRadius: 3,
                    textTransform: 'none',
                    fontWeight: 600,
                    px: 2.5,
                  }}
                >
                  View details
                </Button>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Container>
    </Box>
  );
}