import React from 'react';
import { observer } from 'mobx-react-lite';
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Paper,
  Chip
} from '@mui/material';
import { Link } from 'react-router-dom';

export default observer(function RecommendationDetailedSidebar() {
  return (
    <>
      <Paper
        sx={{
          textAlign: 'center',
          bgcolor: 'teal',
          color: 'white',
          p: 1,
          borderRadius: 1,
          mb: 1
        }}
        elevation={3}
      >
        <Typography variant="subtitle1">3 People Vote</Typography>
      </Paper>

      <Paper sx={{ p: 2 }} elevation={1}>
        <List>
          <ListItem alignItems="flex-start" sx={{ position: 'relative' }}>
            <Chip
              label="Host"
              color="warning"
              size="small"
              sx={{
                position: 'absolute',
                right: 8,
                top: 8
              }}
            />
            <ListItemAvatar>
              <Avatar alt="John" src="/assets/user.png" />
            </ListItemAvatar>
            <ListItemText
              primary={
                <Link to="#">
                  <Typography variant="h6" component="div">John</Typography>
                </Link>
              }
              secondary="Following"
            />
          </ListItem>

          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Tom" src="/assets/user.png" />
            </ListItemAvatar>
            <ListItemText
              primary={
                <Link to="#">
                  <Typography variant="h6" component="div">Tom</Typography>
                </Link>
              }
              secondary="Following"
            />
          </ListItem>

          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Sally" src="/assets/user.png" />
            </ListItemAvatar>
            <ListItemText
              primary={
                <Link to="#">
                  <Typography variant="h6" component="div">Sally</Typography>
                </Link>
              }
            />
          </ListItem>
        </List>
      </Paper>
    </>
  );
});
