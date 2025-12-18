import { createTheme } from "@mui/material";

export const theme = createTheme({
    palette: {
        mode: 'light', // lub 'dark'
        primary: {
            main: '#1976d2',
        },
        secondary: {
            main: '#9c27b0',
        },
        background: {
            default: '#f5f5f5',
        },
    },
    typography: {
        fontFamily: 'Roboto, Arial, sans-serif',
    },
    shape: {
        borderRadius: 12,
    },
});