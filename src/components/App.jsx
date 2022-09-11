import { lazy, Suspense } from 'react';
import { Box } from './Box';
// import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
// import { authOperations, authSelectors } from '../redux/auth';
import { PrivateRoute } from './UserMenu/PrivateRoute';
import { PublicRoute } from './UserMenu/PublicRoute';
import { Layout } from './Layout/Layout';
import { GlobalStyle } from './GlobalStyle';
import { ToastContainer } from 'react-toastify';

const HomePage = lazy(() => import('pages/HomePages/HomePages'));
const ContactsPage = lazy(() => import('pages/ContactPages/ContactPages'));
const LoginPage = lazy(() => import('pages/LoginPages/LoginPages'));
const RegisterPage = lazy(() => import('pages/RegisterPages/RegisterPages'));

export const App = () => {
  // const dispatch = useDispatch();
  // const isRefreshing = useSelector(authSelectors.getIsFetchingCurrent);
  // useEffect(() => {
  //   dispatch(authOperations.fetchCurrentUser());
  // }, [dispatch]);
  return (
    <Box as="main" width="1024px" mx="auto" pb="50px">
      <Layout />
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route
            path="/"
            element={
              <PublicRoute>
                <HomePage />
              </PublicRoute>
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute>
                <ContactsPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/login"
            element={
              <PublicRoute redirectTo="/contacts" restricted>
                <LoginPage />
              </PublicRoute>
            }
          />
          <Route
            path="/register"
            element={
              <PublicRoute redirectTo="/contacts" restricted>
                <RegisterPage />
              </PublicRoute>
            }
          />
        </Routes>
      </Suspense>
      <ToastContainer theme="colored" autoClose={3000} />
      <GlobalStyle />
    </Box>
  );
};
