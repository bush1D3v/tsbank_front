import axios from "axios";

import { type cardCreateProps } from "../schemas";
import { handleError, jsonUserParser } from "../../../../../../functions";
import { cardDetailSubmit } from ".";

export interface cardCreateResponseProps {
  success: boolean;
  message: string;
}

export default async function cardCreateSubmit(
  data: cardCreateProps
): Promise<cardCreateResponseProps> {
  const { cardData } = data;

  const { token } = jsonUserParser(sessionStorage.getItem("userData"));

  const {
    VITE_REACT_APP_API_BASE_URL,
    VITE_REACT_APP_CARD_CREATE_ENDPOINT
  } = import.meta.env;

  try {
    const response = await axios.post(`${VITE_REACT_APP_API_BASE_URL}${VITE_REACT_APP_CARD_CREATE_ENDPOINT}`,
      {
        card_number: cardData.card_number,
        card_type: cardData.card_type,
        cardholder_name: cardData.cardholder_name,
        cvv: cardData.cvv,
        expiration_date: cardData.expiration_date,
        password: cardData.password,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

    if (response.status === 201) {
      const detailResponse = await cardDetailSubmit();
      sessionStorage.setItem("cardsData", JSON.stringify(detailResponse.message));
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
