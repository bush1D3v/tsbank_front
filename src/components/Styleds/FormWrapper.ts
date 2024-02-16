import styled from "styled-components";

const FormWrapper = styled.form`
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  justify-content: space-evenly;
  width: 90%;
  text-align: center;
  border-radius: 40px;
  gap: 20px;

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

export default FormWrapper;
