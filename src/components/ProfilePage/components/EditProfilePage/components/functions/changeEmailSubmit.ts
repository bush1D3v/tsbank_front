import axios from "axios";
import { type changeEmailProps } from "../schemas";
import { API_URL_BASE, UPDATE_EMAIL_ENDPOINT } from "../../../../../../utils";
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

  const { token } = jsonUserParser(sessionStorage.getItem("userInfo"));

  try {
    const response = await axios.patch(`${API_URL_BASE}${UPDATE_EMAIL_ENDPOINT}`,
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
