import axios from "axios";
import { handleError, jsonUserParser } from "../../../../../functions";
import { type User } from "../../../../../types";

interface detailUserResponseProps {
  success: boolean;
  message: string;
  user?: User
}

export default async function detailUserSubmit(): Promise<detailUserResponseProps> {
  const { token } = jsonUserParser(sessionStorage.getItem("userData"));

  const {
    VITE_REACT_APP_API_BASE_URL,
    VITE_REACT_APP_DETAIL_ENDPOINT
  } = import.meta.env;

  try {
    const response = await axios.get(`${VITE_REACT_APP_API_BASE_URL}${VITE_REACT_APP_DETAIL_ENDPOINT}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

    if (response.status === 200) {
      return {
        success: true,
        message: "User detailed successfully.",
        user: response.data
      };
    } else {
      return {
        success: false,
        message: "An error occurred while detailing a user.",
      };
    }
  } catch (error) {
    return handleError(error);
  }
}
