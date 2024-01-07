import { styled } from "styled-components";

export const InputField = styled.input`
  width: 100%;
  border-radius: 10px;
  padding: 1rem 1.5rem;
  background-color: var(--input);
  outline: none;
  color: var(--black);

  &::placeholder {
    color: var(--black-blue);
  }

  &:focus {
    border: solid 3px var(--black-blue);
  }

  &:disabled {
    opacity: 0.4;
  }
`;
