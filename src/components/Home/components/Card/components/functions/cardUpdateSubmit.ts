import axios from "axios";

import { type cardUpdateProps } from "../schemas";
import { handleError, jsonUserParser } from "../../../../../../functions";

interface cardUpdateResponseProps {
  success: boolean;
  message: string;
}

export default async function cardUpdateSubmit(
  data: cardUpdateProps
): Promise<cardUpdateResponseProps> {
  const { userData } = data;

  const { token } = jsonUserParser(sessionStorage.getItem("userData"));

  const {
    VITE_REACT_APP_API_BASE_URL,
    VITE_REACT_APP_CARD_UPDATE_ENDPOINT
  } = import.meta.env;

  try {
    const response = await axios.patch(`${VITE_REACT_APP_API_BASE_URL}${VITE_REACT_APP_CARD_UPDATE_ENDPOINT}`,
      {
        new_password: userData.new_password,
        password: userData.password,
        card_type: userData.card_type
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

    if (response.status === 201) {
      return {
        success: true,
        message: response.data
      };
    } else {
      return {
        success: false,
        message: "An error occurred while updating a card password.",
      };
    }
  } catch (error) {
    return handleError(error);
  }
}
