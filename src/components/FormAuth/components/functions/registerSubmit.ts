import axios from "axios";
import { type registerProps } from "../schemas";
import { handleError } from "../../../../functions";

export interface registerResponseProps {
  success: boolean;
  message: string;
}

export default async function registerSubmit(
  data: registerProps,
): Promise<registerResponseProps> {
  const { userData } = data;

  const {
    VITE_REACT_APP_API_BASE_URL,
    VITE_REACT_APP_REGISTER_ENDPOINT
  } = import.meta.env;

  try {
    const response = await axios.post(`${VITE_REACT_APP_API_BASE_URL}${VITE_REACT_APP_REGISTER_ENDPOINT}`,
      {
        name: userData.name,
        email: userData.email,
        password: userData.password,
        cpf: userData.cpf,
        phone: userData.phone
      });

    if (response.status === 201) {
      return {
        success: true,
        message: "User registered successfully!"
      };
    } else {
      return {
        success: false,
        message: "An error occurred while registering the user.",
      };
    }
  } catch (error) {
    return handleError(error);
  }
}
