import axios from "axios";
import { type editAllAccInfoProps } from "../schemas";
import { User } from "../../../../../../types";
import {
  handleError,
  jsonUserParser,
  sessionStorageStringify
} from "../../../../../../functions";

interface editAllAccInfoResponseProps {
  success: boolean;
  message: string;
  user?: User;
}

export default async function editAllAccInfoSubmit(
  data: editAllAccInfoProps
): Promise<editAllAccInfoResponseProps> {
  const { userData } = data;

  const { token } = jsonUserParser(sessionStorage.getItem("userData"));

  const {
    VITE_REACT_APP_API_BASE_URL,
    VITE_REACT_APP_UPDATE_ALL_ENDPOINT
  } = import.meta.env;

  try {
    const response = await axios.put(`${VITE_REACT_APP_API_BASE_URL}${VITE_REACT_APP_UPDATE_ALL_ENDPOINT}`,
      {
        new_email: userData.new_email,
        new_phone: userData.new_phone,
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
      sessionStorageStringify({
        param: "phone",
        token,
        newValue: userData.new_phone
      });
      sessionStorageStringify({
        param: "email",
        token,
        newValue: userData.new_email
      });
      return {
        success: true,
        message: "User update successfully!",
        user: response.data
      };
    } else {
      return {
        success: false,
        message: "An error occurred while datas exchange.",
      };
    }
  } catch (error) {
    return handleError(error);
  }
}
