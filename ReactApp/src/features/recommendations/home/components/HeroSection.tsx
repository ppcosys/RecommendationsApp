import { Box, Button, Stack, TextField, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

export default function HeroSection() {
  return (
    <Box
      sx={{
        textAlign: 'center',
        maxWidth: 820,
        mx: 'auto',
        pt: { xs: 1, md: 2 },
      }}
    >
      <Typography
        component="h1"
        sx={{
          fontSize: { xs: '2rem', sm: '2.8rem', md: '3.8rem' },
          fontWeight: 700,
          lineHeight: 1.08,
          letterSpacing: '-0.03em',
          mb: 2.5,
        }}
      >
        Discover the best places.
        <br />
        With a touch of AI.
      </Typography>

      <Typography
        color="text.secondary"
        sx={{
          fontSize: { xs: '0.95rem', md: '1.15rem' },
          lineHeight: 1.6,
          maxWidth: 680,
          mx: 'auto',
          mb: 4,
        }}
      >
        Recommendations is a smart place recommendation platform powered by community
        insights. Rate, add, and discover places tailored to your needs.
      </Typography>

      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        spacing={2}
        justifyContent="center"
        alignItems="stretch"
        sx={{ maxWidth: 620, mx: 'auto' }}
      >
        <TextField
          fullWidth
          placeholder="What are you looking for?"
          sx={{
            '& .MuiOutlinedInput-root': {
              minHeight: 54,
              borderRadius: 3,
            },
          }}
        />

        <Button
          component={Link}
          to="/recommendations"
          variant="contained"
          size="large"
          sx={{
            minHeight: 54,
            minWidth: { xs: '100%', sm: 220 },
            borderRadius: 3,
            textTransform: 'none',
            fontWeight: 600,
            px: 3,
          }}
        >
          Browse
        </Button>
      </Stack>
    </Box>
  )
}