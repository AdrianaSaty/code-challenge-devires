import styled from 'styled-components';

export const Form = styled.form``;

export const Container = styled.div``;

export const Submit = styled.button`
  cursor: pointer;
  background: transparent;
  font-size: 16px;
  border-radius: 3px;
  color: #0082c1;
  border: 2px solid #0082c1;
  margin: 0 1em;
  padding: 0.25em 1em;
  transition: 0.5s all ease-out;
  &:hover {
    background-color: #0082c1;
    color: white;
  }
`;

export const TextInput = styled.input`
  cursor: pointer;
  background: transparent;
  font-size: 16px;
  border-radius: 3px;
  color: #0082c1;
  border: 2px solid #0082c1;
  margin: 1em 0;
  padding: 0.25em 1em;
  transition: 0.5s all ease-out;
  &:hover {
    color: white;
  }
`;
