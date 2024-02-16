import axios from "axios";
import { type loginProps } from "../schemas";
import { type UserData } from "@/types";
import { handleError } from "@/functions";
import { API_BASE_URL, LOGIN_ENDPOINT } from "@/utils/apiPaths";

export interface loginResponseProps {
  success: boolean;
  message: string;
  userData?: UserData;
}

export default async function loginSubmit(
  data: loginProps,
): Promise<loginResponseProps> {
  const { userData } = data;

  try {
    const response = await axios.post(`${API_BASE_URL}${LOGIN_ENDPOINT}`,
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
