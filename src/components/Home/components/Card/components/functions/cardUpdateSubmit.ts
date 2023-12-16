import axios from "axios";

import { type cardUpdateProps } from "../schemas";
import { handleError, jsonUserParser } from "../../../../../../functions";
import { API_URL_BASE, CARD_UPDATE_ENDPOINT } from "../../../../../../utils";

interface cardUpdateResponseProps {
  success: boolean;
  message: string;
}

export default async function cardUpdateSubmit(
  data: cardUpdateProps
): Promise<cardUpdateResponseProps> {
  const { userData } = data;

  const { token } = jsonUserParser(sessionStorage.getItem("userInfo"));

  try {
    const response = await axios.patch(`${API_URL_BASE}${CARD_UPDATE_ENDPOINT}`,
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
