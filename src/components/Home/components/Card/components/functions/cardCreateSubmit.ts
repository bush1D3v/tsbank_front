import axios from "axios";

import { type cardCreateProps } from "../schemas";
import { handleError, jsonUserParser } from "../../../../../../functions";
import { API_URL_BASE, CARD_CREATE_ENDPOINT } from "../../../../../../utils";
import { cardDetailSubmit } from ".";

interface cardCreateResponseProps {
  success: boolean;
  message: string;
}

export default async function cardCreateSubmit(
  data: cardCreateProps
): Promise<cardCreateResponseProps> {
  const { userData } = data;

  const { token } = jsonUserParser(sessionStorage.getItem("userInfo"));

  try {
    const response = await axios.post(`${API_URL_BASE}${CARD_CREATE_ENDPOINT}`,
      {
        card_number: userData.card_number,
        card_type: userData.card_type,
        cardholder_name: userData.cardholder_name,
        cvv: userData.cvv,
        expiration_date: userData.expiration_date,
        password: userData.password,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

    if (response.status === 201) {
      const detailResponse = await cardDetailSubmit();
      sessionStorage.setItem("cardsInfo", JSON.stringify(detailResponse.message));
      return {
        success: true,
        message: response.data
      };
    } else {
      return {
        success: false,
        message: "An error occurred while creating a card exchange.",
      };
    }
  } catch (error) {
    return handleError(error);
  }
}
