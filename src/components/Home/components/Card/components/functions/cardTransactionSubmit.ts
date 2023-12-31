import axios from "axios";

import { type cardTransactionProps } from "../schemas";
import { handleError, jsonUserParser } from "../../../../../../functions";
import { API_URL_BASE, CARD_TRANSACTION_ENDPOINT } from "../../../../../../utils";
import { cardDetailSubmit } from ".";
import { getHistory } from "../../../functions";

interface cardTransactionResponseProps {
  success: boolean;
  message: string;
}

export default async function cardTransactionSubmit(
  data: cardTransactionProps
): Promise<cardTransactionResponseProps> {
  const { userData } = data;

  const { token } = jsonUserParser(sessionStorage.getItem("userInfo"));

  try {
    const response = await axios.post(`${API_URL_BASE}${CARD_TRANSACTION_ENDPOINT}`,
      {
        password: userData.password,
        card_type: userData.card_type,
        value: userData.value
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

    if (response.status === 201) {
      if (userData.card_type.toLowerCase() === "credit") {
        const cardDetailResponse = await cardDetailSubmit();
        sessionStorage.setItem("cardsInfo", JSON.stringify(cardDetailResponse.message));

        const transactionsDetailResponse = await getHistory();
        sessionStorage.setItem("historyData", JSON.stringify(transactionsDetailResponse.message));
      }
      return {
        success: true,
        message: response.data
      };
    } else {
      return {
        success: false,
        message: "An error occurred while making a card transaction.",
      };
    }
  } catch (error) {
    return handleError(error);
  }
}
