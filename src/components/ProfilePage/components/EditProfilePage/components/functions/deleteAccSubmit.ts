import axios from "axios";
import { type deleteAccProps } from "../schemas";
import { handleError, jsonUserParser } from "../../../../../../functions";

interface deleteAccResponseProps {
  success: boolean;
  message: string;
}

export default async function deleteAccSubmit(
  data: deleteAccProps
): Promise<deleteAccResponseProps> {
  const { userData } = data;

  const { token } = jsonUserParser(sessionStorage.getItem("userInfo"));

  const {
    VITE_REACT_APP_API_BASE_URL,
    VITE_REACT_APP_DELETE_USER_ENDPOINT
  } = import.meta.env;

  try {
    const response = await axios.delete(`${VITE_REACT_APP_API_BASE_URL}${VITE_REACT_APP_DELETE_USER_ENDPOINT}`,
      {
        data: { password: userData.password },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

    if (response.status === 200) {
      sessionStorage.clear();
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
