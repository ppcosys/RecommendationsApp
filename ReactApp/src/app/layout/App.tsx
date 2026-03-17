import NavBar from "./NavBar";
import { observer } from "mobx-react-lite";
import { Outlet, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Box, CssBaseline } from "@mui/material";

function App() {
  const location = useLocation();

  const isPublicPage =
    location.pathname === "/" || location.pathname === "/discover";

  return (
    <>
      <CssBaseline />
      <ToastContainer position="bottom-right" hideProgressBar theme="colored" />

      {isPublicPage ? (
        <Outlet />
      ) : (
        <>
          <NavBar />
          <Box
            component="main"
            sx={{
              flex: 1,
              width: "100%",
              maxWidth: "lg",
              mx: "auto",
              px: { xs: 2, sm: 3, md: 4 },
              py: 4,
              mt: { xs: 7, sm: 8 },
            }}
          >
            <Outlet />
          </Box>
        </>
      )}
    </>
  );
}

export default observer(App);