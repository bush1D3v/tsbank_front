import styled from "styled-components";

const Button = styled.button`
  background-color: var(--white-blue);
  font-weight: 700;
  padding: 1rem 0;
  min-width: 100%;
  border-radius: 10px;
  font-size: 1.25rem;
  line-height: 1.75rem;
  transition: all 400ms;

  &:hover {
    color: var(--purple);
  }

  & {
    @media (min-width: 768px) {
      width: 80%;
    }

    @media (min-width: 1024px) {
      width: 50%;
    }

    @media (min-width: 1280px) {
      width: 90%;
    }

    @media (min-width: 1536px) {
      width: 50%;
    }
  }
`;

export default Button;
