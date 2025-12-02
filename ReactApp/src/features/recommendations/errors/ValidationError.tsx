import { Alert, AlertTitle, List, ListItem, ListItemText } from '@mui/material';

interface Props {
  errors: string[];
}

export default function ValidationError({ errors }: Props) {
  if (!errors || errors.length === 0) return null;

  return (
    <Alert severity="error" sx={{ mt: 2 }}>
      <AlertTitle>Validation Errors</AlertTitle>
      <List dense>
        {errors.map((err, i) => (
          <ListItem key={i} disablePadding>
            <ListItemText primary={`- ${err}`} />
          </ListItem>
        ))}
      </List>
    </Alert>
  );
}
