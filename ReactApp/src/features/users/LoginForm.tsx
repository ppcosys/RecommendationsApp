import { useState } from "react";
import { observer } from "mobx-react-lite";
import {
  Alert,
  Box,
  Button,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useStore } from "../../app/stores/store";

export default observer(function LoginForm() {
  const navigate = useNavigate();
  const location = useLocation();
  const { userStore } = useStore();

  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState<string | null>(null);

  const from = location.state?.from?.pathname || "/recommendations";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    try {
      await userStore.login(values);
      navigate(from);
    } catch {
      setError("Invalid email or password");
    }
  };

  return (
    <Paper sx={{ maxWidth: 480, mx: "auto", p: 4, mt: 8 }}>
      <Typography variant="h4" mb={3}>
        Sign in
      </Typography>

      <Box component="form" onSubmit={handleSubmit}>
        <Stack spacing={2}>
          {error && <Alert severity="error">{error}</Alert>}

          <TextField
            label="Email"
            type="email"
            value={values.email}
            onChange={(e) =>
              setValues({ ...values, email: e.target.value })
            }
            fullWidth
            required
          />

          <TextField
            label="Password"
            type="password"
            value={values.password}
            onChange={(e) =>
              setValues({ ...values, password: e.target.value })
            }
            fullWidth
            required
          />

          <Button
            type="submit"
            variant="contained"
            size="large"
            disabled={userStore.loading}
          >
            Sign in
          </Button>

          <Typography variant="body2">
            Don&apos;t have an account? <Link to="/register">Register</Link>
          </Typography>
        </Stack>
      </Box>
    </Paper>
  );
});