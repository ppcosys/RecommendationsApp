import { GlobalStyles as GlobalThemeStyles } from "@mui/material";

export default function GlobalStyles() {
  return (
    <GlobalThemeStyles
      styles={(theme) => ({
        body: {
          margin: 0,
          padding: 0,
          backgroundColor: theme.palette.background.default,
          color: theme.palette.text.primary,
          fontFamily: theme.typography.fontFamily,
          transition: "background-color 0.3s ease",
        },
        a: {
          color: theme.palette.primary.main,
          textDecoration: "none",
          "&:hover": {
            textDecoration: "underline",
          },
        },
        "::-webkit-scrollbar": {
          width: 8,
        },
        "::-webkit-scrollbar-thumb": {
          backgroundColor: theme.palette.mode === "light" ? "#c1c1c1" : "#555",
          borderRadius: 4,
        },
        "::-webkit-scrollbar-track": {
          backgroundColor: theme.palette.background.default,
        },
      })}
    />
  );
}
