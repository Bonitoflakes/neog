import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  max-width: 1400px;
  padding: 0.8rem 1.6rem;
  margin: 0 auto;
`;

const Input = styled.input`
  font-weight: 600;
  width: 100%;
  height: 4rem;
  border: 1px solid var(--gray-primary);
  outline: none;
  border-radius: 10px;
  padding: 0 1.5rem;
  font-size: 1.4rem;
  margin: 1rem 0;
  appearance: none;
  &::placeholder {
    color: var(--gray-primary);
  }
  &:hover {
    border: 1px solid var(--blue-variant-hover);
  }
  &:focus {
    box-shadow: white 0 0 0 0, var(--blue-variant-shadow) 0 0 0 3px;
  }
`;

const Button = styled.button`
  min-height: 3.6rem;
  font-size: 1.4rem;
  font-weight: 600;
  background: var(--blue-primary);
  color: white;
  padding: 0 1.6rem;
  border-radius: 1rem;
  cursor: pointer;
  outline: none;
  border: none;
  margin-bottom: 1rem;
  &:hover {
    background: var(--blue-variant-hover-dark);
  }
  &:focus {
    border: 1px solid black;
  }
`;

export { Container, Input, Button };
