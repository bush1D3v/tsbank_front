import axios from "axios";
import { type loginProps } from "../schemas";
import { type UserData } from "@/types";
import { handleError } from "@/functions";

export interface loginResponseProps {
  success: boolean;
  message: string;
  userData?: UserData;
}

export default async function loginSubmit(
  data: loginProps,
): Promise<loginResponseProps> {
  const { userData } = data;

  const {
    VITE_REACT_APP_API_BASE_URL,
    VITE_REACT_APP_LOGIN_ENDPOINT
  } = import.meta.env;

  try {
    const response = await axios.post(`${VITE_REACT_APP_API_BASE_URL}${VITE_REACT_APP_LOGIN_ENDPOINT}`,
      {
        email: userData.email,
        password: userData.password,
      });

    if (response.status === 200) {
      return {
        success: true,
        message: "Login completed!",
        userData: response.data,
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
