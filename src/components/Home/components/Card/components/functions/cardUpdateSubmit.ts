import axios from "axios";

import { type cardUpdateProps } from "../schemas";
import { handleError, jsonUserParser } from "@/functions";

export interface cardUpdateResponseProps {
  success: boolean;
  message: string;
}

export default async function cardUpdateSubmit(
  data: cardUpdateProps
): Promise<cardUpdateResponseProps> {
  const { cardData } = data;

  const { token } = jsonUserParser(sessionStorage.getItem("userData"));

  const {
    VITE_REACT_APP_API_BASE_URL,
    VITE_REACT_APP_CARD_UPDATE_ENDPOINT
  } = import.meta.env;

  try {
    const response = await axios.patch(`${VITE_REACT_APP_API_BASE_URL}${VITE_REACT_APP_CARD_UPDATE_ENDPOINT}`,
      {
        new_password: cardData.new_password,
        password: cardData.password,
        card_type: cardData.card_type
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
