import { observer } from 'mobx-react-lite';
import {
  Box,
  Paper,
  Typography,
  Avatar,
  TextField,
  Button,
  Stack,
  Divider
} from '@mui/material';

export default observer(function RecommendationDetailedChat() {
  return (
    <>
      <Paper
        elevation={3}
        sx={{
          textAlign: 'center',
          p: 2,
          backgroundColor: 'teal',
          color: 'white',
          borderRadius: '6px 6px 0 0',
        }}
      >
        <Typography variant="h6">Chat about this Recommendation</Typography>
      </Paper>

      <Paper sx={{ p: 3, borderRadius: '0 0 6px 6px' }}>
        <Stack spacing={4}>
          {/* Comment 1 */}
          <Box display="flex" gap={2}>
            <Avatar src="/assets/user.png" />
            <Box>
              <Typography variant="subtitle1" fontWeight="bold">
                John
              </Typography>
              <Typography variant="caption" color="text.secondary">
                Today at 5:42PM
              </Typography>
              <Typography variant="body1" mt={1}>
                Great event!
              </Typography>
              <Button size="small" sx={{ mt: 1 }}>Reply</Button>
            </Box>
          </Box>

          <Divider />

          {/* Comment 2 */}
          <Box display="flex" gap={2}>
            <Avatar src="/assets/user.png" />
            <Box>
              <Typography variant="subtitle1" fontWeight="bold">
                Joe
              </Typography>
              <Typography variant="caption" color="text.secondary">
                5 days ago
              </Typography>
              <Typography variant="body1" mt={1}>
                Awesome!
              </Typography>
              <Button size="small" sx={{ mt: 1 }}>Reply</Button>
            </Box>
          </Box>

          <Divider />

          {/* Form */}
          <Box>
            <TextField
              multiline
              fullWidth
              minRows={3}
              variant="outlined"
              placeholder="Write a reply..."
            />
            <Button
              variant="contained"
              color="primary"
              sx={{ mt: 2 }}
              startIcon={<span className="material-icons">edit</span>}
            >
              Add Reply
            </Button>
          </Box>
        </Stack>
      </Paper>
    </>
  );
});
