import Container from '@mui/material/Container';
import NavBar from './NavBar';
import { observer } from 'mobx-react-lite';
import { Outlet, useLocation } from 'react-router-dom';
import HomePage from '../../features/recommendations/home/HomePage';
import { ToastContainer } from 'react-toastify';

function App() {
  const location = useLocation();

  return (
    <>
      {location.pathname === '/' ? (
        <HomePage />
      ) : (
        <>
          <ToastContainer position="bottom-right" hideProgressBar theme="colored" />
          <NavBar />
          <Container sx={{ mt: 10 }}>
            <Outlet />
          </Container>
        </>
      )}
    </>
  );
}

export default observer(App);

