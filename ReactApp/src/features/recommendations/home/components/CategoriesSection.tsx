import { Box, Card, CardContent, Container, Grid, Typography } from '@mui/material';

const categories = [
  {
    title: 'Places',
    description: 'Discover restaurants, cafes, attractions, and local gems worth visiting.',
  },
  {
    title: 'Events',
    description: 'Find concerts, exhibitions, meetups, and experiences tailored to your interests.',
  },
  {
    title: 'Products',
    description: 'Browse useful and trusted product recommendations from the community.',
  },
];

export default function CategoriesSection() {
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
            Explore recommendation categories
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
            Start with the category that matters most to you and discover relevant recommendations faster.
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {categories.map((category) => (
            <Grid size={{ xs: 12, md: 4 }} key={category.title}>
              <Card
                elevation={0}
                sx={{
                  height: '100%',
                  borderRadius: 4,
                  border: (theme) => `1px solid ${theme.palette.divider}`,
                }}
              >
                <CardContent sx={{ p: 3 }}>
                  <Typography variant="h5" sx={{ fontWeight: 700, mb: 1.5 }}>
                    {category.title}
                  </Typography>

                  <Typography color="text.secondary" sx={{ lineHeight: 1.7 }}>
                    {category.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}