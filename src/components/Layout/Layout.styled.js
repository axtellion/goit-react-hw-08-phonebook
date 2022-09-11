import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Logo = styled.h2`
  color: white;
  margin-right: 40px;
  :hover {
    color: #7fffd4;
  }
`;

export const Link = styled(NavLink)`
  width: 150px;
  height: 30px;
  border: 1px solid white;
  border-radius: 10px;

  color: white;
  background-color: transparent;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  :hover,
  :focus {
    color: #7fffd4;
  }
`;

export const Button = styled.button`
  width: 150px;
  height: 30px;
  border: 1px solid white;
  border-radius: 10px;

  color: white;
  background-color: transparent;
  cursor: pointer;

  :hover,
  :focus {
    color: #7fffd4;
  }
`;

export const Wrap = styled.div`
  display: flex;
  gap: 25px;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Text = styled.h2``;
