import axios from "axios";
import { handleError, jsonUserParser } from "../../../../../../functions";
import { deleteAccProps } from "../schemas";
import { API_URL_BASE, DELETE_USER_ENDPOINT } from "../../../../../../utils";

interface deleteAccResponseProps {
  success: boolean;
  message: string;
}

export default async function deleteAccSubmit(
  data: deleteAccProps
): Promise<deleteAccResponseProps> {
  const { userData } = data;

  const { token } = jsonUserParser(localStorage.getItem("userInfo"));

  try {
    const response = await axios.delete(`${API_URL_BASE}${DELETE_USER_ENDPOINT}`, {
      data: { password: userData.password },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.status === 200) {
      localStorage.removeItem("userInfo");
      return {
        success: true,
        message: response.data
      };
    } else {
      return {
        success: false,
        message: "An error occurred while deleting account.",
      };
    }
  } catch (error) {
    return handleError(error);
  }
}
