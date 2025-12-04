import Calendar from 'react-calendar';
import {
  Paper,
  Typography,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Divider,
  Box,
} from '@mui/material';

export default function RecommendationFilters() {
  return (
    <Box display="flex" flexDirection="column" gap={2}>
      <Paper sx={{ p: 2 }} elevation={3}>
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
      <Paper sx={{ p: 2 }} elevation={3}>
        <Calendar />
      </Paper>
    </Box>
  );
}
