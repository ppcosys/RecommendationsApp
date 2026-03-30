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
import { Link, useNavigate } from "react-router-dom";
import { useStore } from "../../app/stores/store";

export default observer(function RegisterForm() {
  const navigate = useNavigate();
  const { userStore } = useStore();

  const [values, setValues] = useState({
    displayName: "",
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    if (values.password !== values.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      await userStore.register(values);
      setSuccess("Account created successfully. You can now sign in.");

      setTimeout(() => {
        navigate("/login");
      }, 1200);
    } catch {
      setError("Registration failed");
    }
  };

  return (
    <Paper sx={{ maxWidth: 520, mx: "auto", p: 4, mt: 8 }}>
      <Typography variant="h4" mb={3}>
        Create account
      </Typography>

      <Box component="form" onSubmit={handleSubmit}>
        <Stack spacing={2}>
          {error && <Alert severity="error">{error}</Alert>}
          {success && <Alert severity="success">{success}</Alert>}

          <TextField
            label="Display name"
            value={values.displayName}
            onChange={(e) =>
              setValues({ ...values, displayName: e.target.value })
            }
            fullWidth
            required
          />

          <TextField
            label="Username"
            value={values.userName}
            onChange={(e) =>
              setValues({ ...values, userName: e.target.value })
            }
            fullWidth
            required
          />

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

          <TextField
            label="Confirm password"
            type="password"
            value={values.confirmPassword}
            onChange={(e) =>
              setValues({ ...values, confirmPassword: e.target.value })
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
            Create account
          </Button>

          <Typography variant="body2">
            Already have an account? <Link to="/login">Sign in</Link>
          </Typography>
        </Stack>
      </Box>
    </Paper>
  );
});