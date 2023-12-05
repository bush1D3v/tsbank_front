import { styled } from "styled-components";

export const InputField = styled.input`
  width: 100%;
  border-radius: 10px;
  padding: 1rem 1.5rem;
  background-color: var(--input);
  outline: none;
  color: var(--black);

  &::placeholder {
    color: var(--primary);
  }

  &:focus {
    border: solid 3px var(--primary);
  }

  &:disabled {
    opacity: 0.4;
  }
`;
