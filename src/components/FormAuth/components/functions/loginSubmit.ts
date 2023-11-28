import axios from "axios";
import { API_URL_BASE, LOGIN_ENDPOINT } from "../../../../utils";
import { type loginProps } from "../schemas";
import { type User } from "../../../../types";
import { handleError } from "../../../../functions";

interface loginResponseProps {
  success: boolean;
  message: string;
  user?: User;
}

export default async function handleLoginSubmit(
  data: loginProps,
): Promise<loginResponseProps> {
  const { userData } = data;

  try {
    const response = await axios.post(`${API_URL_BASE}${LOGIN_ENDPOINT}`, {
      email: userData.email,
      password: userData.password,
    });

    if (response.status === 200) {
      return {
        success: true,
        message: "Login completed!",
        user: response.data,
      };
    } else {
      return {
        success: false,
        message: "An error occurred while logging in.",
      };
    }

  } catch (error) {
    return handleError(error);
  }
}
