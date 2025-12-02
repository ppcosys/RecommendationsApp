import React from 'react';
import Calendar from 'react-calendar';
import {
  Paper,
  Typography,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Divider,
} from '@mui/material';

export default function RecommendationFilters() {
  return (
    <>
      <Paper sx={{ width: '100%', mt: 3, p: 2 }} elevation={3}>
        <Typography variant="h6" color="primary" gutterBottom>
          Filters
        </Typography>
        <Divider sx={{ mb: 1 }} />
        <List component="nav">
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="All Recommendations" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="I voted" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="I recommend it" />
            </ListItemButton>
          </ListItem>
        </List>
      </Paper>
      <Calendar style={{ width: '100%', marginTop: '1rem' }} />
    </>
  );
}
