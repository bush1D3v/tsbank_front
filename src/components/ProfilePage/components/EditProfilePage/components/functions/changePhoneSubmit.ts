import axios from "axios";
import { type changePhoneProps } from "../schemas";
import { API_URL_BASE, UPDATE_PHONE_ENDPOINT } from "../../../../../../utils";
import {
  handleError,
  jsonUserParser,
  sessionStorageStringify
} from "../../../../../../functions";

interface changePhoneResponseProps {
  success: boolean;
  message: string;
}

export default async function changePhoneSubmit(
  data: changePhoneProps
): Promise<changePhoneResponseProps> {
  const { userData } = data;

  const { token } = jsonUserParser(sessionStorage.getItem("userInfo"));

  try {
    const response = await axios.patch(`${API_URL_BASE}${UPDATE_PHONE_ENDPOINT}`,
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
