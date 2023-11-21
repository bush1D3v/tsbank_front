import styled from "styled-components";

export const FormWrapper = styled.form`
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  justify-content: space-evenly;
  width: 90%;
  text-align: center;
  background-color: var(--background);
  border-radius: 40px;

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
      width: 47.5%;
    }
  }
`;
