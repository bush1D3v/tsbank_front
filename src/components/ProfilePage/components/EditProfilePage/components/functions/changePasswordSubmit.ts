import axios from "axios";
import { type changePasswordProps } from "../schemas";
import { handleError, jsonUserParser } from "../../../../../../functions";

export interface changePasswordResponseProps {
  success: boolean;
  message: string;
}

export default async function changePasswordSubmit(
  data: changePasswordProps
): Promise<changePasswordResponseProps> {
  const { userData } = data;

  const { token } = jsonUserParser(sessionStorage.getItem("userData"));

  const {
    VITE_REACT_APP_API_BASE_URL,
    VITE_REACT_APP_UPDATE_PASSWORD_ENDPOINT
  } = import.meta.env;

  try {
    const response = await axios.patch(`${VITE_REACT_APP_API_BASE_URL}${VITE_REACT_APP_UPDATE_PASSWORD_ENDPOINT}`,
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
