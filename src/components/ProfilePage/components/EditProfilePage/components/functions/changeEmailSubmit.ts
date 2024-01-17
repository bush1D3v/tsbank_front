import axios from "axios";
import { type changeEmailProps } from "../schemas";
import {
  handleError,
  jsonUserParser,
  sessionStorageStringify
} from "../../../../../../functions";

interface changeEmailResponseProps {
  success: boolean;
  message: string;
}

export default async function changeEmailSubmit(
  data: changeEmailProps
): Promise<changeEmailResponseProps> {
  const { userData } = data;

  const { token } = jsonUserParser(sessionStorage.getItem("userData"));

  const {
    VITE_REACT_APP_API_BASE_URL,
    VITE_REACT_APP_UPDATE_EMAIL_ENDPOINT
  } = import.meta.env;

  try {
    const response = await axios.patch(`${VITE_REACT_APP_API_BASE_URL}${VITE_REACT_APP_UPDATE_EMAIL_ENDPOINT}`,
      {
        new_email: userData.new_email,
        password: userData.password,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

    if (response.status === 201) {
      sessionStorageStringify({
        param: "email",
        token,
        newValue: userData.new_email
      });
      return {
        success: true,
        message: response.data
      };
    } else {
      return {
        success: false,
        message: "An error occurred while email exchange.",
      };
    }
  } catch (error) {
    return handleError(error);
  }
}
