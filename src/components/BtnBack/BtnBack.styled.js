import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavItem = styled(NavLink)`
  border-radius: 5px;
  border: 1px solid black;
  display: flex;
  margin-top: 20px;
  justify-content: center;
  align-items: center;
  color: white;
  text-decoration: none;
  gap: 10px;
  width: 150px;
  height: 40px;
  background-color: #00bfff;
  :hover {
    color: orange;
  }
  svg {
    width: 40px;
    height: 40px;
  }
`;
