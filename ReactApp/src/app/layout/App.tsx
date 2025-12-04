import NavBar from './NavBar';
import { observer } from 'mobx-react-lite';
import { Outlet, useLocation } from 'react-router-dom';
import HomePage from '../../features/recommendations/home/HomePage';
import { ToastContainer } from 'react-toastify';
import Container from '@mui/material/Container';

function App() {
  const location = useLocation();

  return (
    <>
      {location.pathname === '/' ? (
        <HomePage />
      ) : (
        <>
          <ToastContainer
            position="bottom-right"
            hideProgressBar
            theme="colored"
          />
          <NavBar />
          <Container maxWidth="lg" sx={{ mt: 10 }}>
            <Outlet />
          </Container>
        </>
      )}
    </>
  );
}

export default observer(App);
