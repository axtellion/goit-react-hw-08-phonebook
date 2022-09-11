import styled from 'styled-components';

export const Container = styled.div``;

export const Title = styled.h1`
  font-size: 30px;
  color: black;
  margin: 0;
  margin-bottom: 20px;
  padding-bottom: 20px;

  text-align: center;

  border-bottom: 3px solid #1e90ff;
`;

export const FormContact = styled.form`
  text-align: center;
`;

export const Btn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  margin: 0 auto;
  background-color: #00bfff;

  width: 170px;
  padding: 5px;
  border: 1px solid black;
  border-radius: 5px;

  color: white;
  cursor: pointer;
  :hover,
  :focus {
    color: #7fffd4;
  }
  svg {
    width: 25px;
    height: 25px;
  }
`;

export const FormInput = styled.input`
  height: 30px;

  background-color: #dcdcdc;
  border: 1px solid #c0c0c0;
  border-radius: 5px;
  outline: none;
`;

export const Wrap = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 40px;
`;

export const Text = styled.p`
  margin: 0;
  margin-bottom: 5px;
`;
