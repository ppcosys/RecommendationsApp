import React from 'react';
import { Backdrop, CircularProgress, Typography, Box } from '@mui/material';

interface Props {
  inverted?: boolean;
  content?: string;
}

export default function LoadingComponent({ inverted = true, content = 'Loading...' }: Props) {
  return (
    <Backdrop
      sx={{
        color: '#fff',
        zIndex: (theme) => theme.zIndex.drawer + 1,
        flexDirection: 'column',
        display: 'flex',
      }}
      open
    >
      <CircularProgress color="inherit" />
      <Box mt={2}>
        <Typography variant="h6">{content}</Typography>
      </Box>
    </Backdrop>
  );
}
