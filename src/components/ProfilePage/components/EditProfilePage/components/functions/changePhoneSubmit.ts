import axios from "axios";
import { type changePhoneProps } from "../schemas";
import {
  handleError,
  jsonUserParser,
  sessionStorageStringify
} from "../../../../../../functions";

export interface changePhoneResponseProps {
  success: boolean;
  message: string;
}

export default async function changePhoneSubmit(
  data: changePhoneProps
): Promise<changePhoneResponseProps> {
  const { userData } = data;

  const { token } = jsonUserParser(sessionStorage.getItem("userData"));

  const {
    VITE_REACT_APP_API_BASE_URL,
    VITE_REACT_APP_UPDATE_PHONE_ENDPOINT
  } = import.meta.env;

  try {
    const response = await axios.patch(`${VITE_REACT_APP_API_BASE_URL}${VITE_REACT_APP_UPDATE_PHONE_ENDPOINT}`,
      {
        new_phone: userData.new_phone,
        password: userData.password,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (response.status === 201) {
      sessionStorageStringify({
        param: "phone",
        token,
        newValue: userData.new_phone
      });
      return {
        success: true,
        message: response.data
      };
    } else {
      return {
        success: false,
        message: "An error occurred while phone exchange.",
      };
    }
  } catch (error) {
    return handleError(error);
  }
}
