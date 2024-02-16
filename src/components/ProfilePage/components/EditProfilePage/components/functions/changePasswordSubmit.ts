import axios from "axios";
import { type changePasswordProps } from "../schemas";
import { handleError, jsonUserParser } from "@/functions";
import { API_BASE_URL, UPDATE_PASSWORD_ENDPOINT } from "@/utils/apiPaths";

export interface changePasswordResponseProps {
  success: boolean;
  message: string;
}

export default async function changePasswordSubmit(
  data: changePasswordProps
): Promise<changePasswordResponseProps> {
  const { userData } = data;

  const { token } = jsonUserParser(sessionStorage.getItem("userData"));

  try {
    const response = await axios.patch(`${API_BASE_URL}${UPDATE_PASSWORD_ENDPOINT}`,
      {
        new_password: userData.new_password,
        password: userData.password,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (response.status === 201) {
      return {
        success: true,
        message: response.data
      };
    } else {
      return {
        success: false,
        message: "An error occurred while password exchange.",
      };
    }
  } catch (error) {
    return handleError(error);
  }
}
