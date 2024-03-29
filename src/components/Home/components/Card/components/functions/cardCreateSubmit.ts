import axios from "axios";

import { type cardCreateProps } from "../schemas";
import { handleError, jsonUserParser } from "@/functions";
import { cardDetailSubmit } from "./cardDetailSubmit";
import { API_BASE_URL, CARD_CREATE_ENDPOINT } from "@/utils/apiPaths";

export interface cardCreateResponseProps {
  success: boolean;
  message: string;
}

export default async function cardCreateSubmit(
  data: cardCreateProps
): Promise<cardCreateResponseProps> {
  const { cardData } = data;

  const { token } = jsonUserParser(sessionStorage.getItem("userData"));

  try {
    const response = await axios.post(`${API_BASE_URL}${CARD_CREATE_ENDPOINT}`,
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
