import axios from "axios";
import { type editAllAccInfoProps } from "../schemas";
import {
  handleError,
  jsonUserParser,
  sessionStorageStringify
} from "@/functions";
import { API_BASE_URL, UPDATE_ALL_ENDPOINT } from "@/utils/apiPaths";

export interface editAllAccInfoUserResponseProps {
  id: number;
  name: string;
  email: string;
}

export interface editAllAccInfoResponseProps {
  success: boolean;
  message: string;
  user?: editAllAccInfoUserResponseProps;
}

export default async function editAllAccInfoSubmit(
  data: editAllAccInfoProps
): Promise<editAllAccInfoResponseProps> {
  const { userData } = data;

  const { token } = jsonUserParser(sessionStorage.getItem("userData"));

  try {
    const response = await axios.put(`${API_BASE_URL}${UPDATE_ALL_ENDPOINT}`,
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
