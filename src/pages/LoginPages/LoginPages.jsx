import { Box } from 'components/Box';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth';
import {
  Title,
  Btn,
  FormInput,
  FormContact,
  Wrap,
  Text,
} from './LoginPages.styled';

const LoginPage = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.logIn({ email, password }));
    setEmail('');
    setPassword('');
  };
  return (
    <Box
      as="section"
      mb="40px"
      mx="auto"
      width="600px"
      border="1px solid"
      py="30px"
      borderRadius="10px"
      bg="white"
      borderColor="#DCDCDC"
    >
      <Title>Login</Title>
      <FormContact onSubmit={handleSubmit}>
        <Wrap>
          <label>
            <Text>Email</Text>
            <FormInput
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
            ></FormInput>
          </label>
          <label>
            <Text>Password</Text>

            <FormInput
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
            ></FormInput>
          </label>
        </Wrap>
        <Btn>Login</Btn>
      </FormContact>
    </Box>
  );
};

export default LoginPage;
