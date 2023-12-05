import axios from "axios";
import { editAllAccInfoProps } from "../schemas";
import { User } from "../../../../../../types";
import { API_URL_BASE, UPDATE_ENDPOINT } from "../../../../../../utils";
import {
  handleError,
  jsonUserParser,
  localStorageStringfy
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

  const { token } = jsonUserParser(localStorage.getItem("userInfo"));

  try {
    const response = await axios.put(`${API_URL_BASE}${UPDATE_ENDPOINT}`,
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
      localStorageStringfy({
        param: "phone",
        token,
        newValue: userData.new_phone
      });
      localStorageStringfy({
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
        message: "An error occurred while email exchange.",
      };
    }
  } catch (error) {
    return handleError(error);
  }
}
