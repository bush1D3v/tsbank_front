import axios from "axios";
import { type registerProps } from "../schemas";
import { API_URL_BASE, REGISTER_ENDPOINT } from "../../../../utils";
import { handleError } from "../../../../functions";

interface registerResponseProps {
  success: boolean;
  message: string;
}

export default async function handleRegisterSubmit(
  data: registerProps,
): Promise<registerResponseProps> {
  const { userData } = data;

  try {
    const response = await axios.post(`${API_URL_BASE}${REGISTER_ENDPOINT}`, {
      name: userData.name,
      email: userData.email,
      password: userData.password,
      cpf: userData.cpf,
      phone: userData.phone
    });

    console.log(response);

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
