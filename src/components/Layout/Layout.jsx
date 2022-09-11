import { Box } from 'components/Box';
import { useDispatch, useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';
import { authOperations } from 'redux/auth';
import { Logo, Button, Wrap, Container, Link, Text } from './Layout.styled';
import { useLocation } from 'react-router-dom';

export const Layout = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const name = useSelector(authSelectors.getUsername);

  const location = useLocation();
  return (
    <Box as="header" bg="#00BFFF" py={10} px={3} mb="100px">
      <Container>
        <a href="/">
          <Logo>Phonebook</Logo>
        </a>
        <Wrap>
          {!isLoggedIn && (
            <>
              {location.pathname === '/login' ? (
                <Link to="/register">Register</Link>
              ) : (
                <Link to="/login">Login</Link>
              )}
            </>
          )}
          {isLoggedIn && (
            <>
              {isLoggedIn && <Text>{name}</Text>}
              <Button onClick={() => dispatch(authOperations.logOut())}>
                Log Out
              </Button>
            </>
          )}
        </Wrap>
      </Container>
    </Box>
  );
};
