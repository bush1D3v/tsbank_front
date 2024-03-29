import axios from "axios";
import { type cardTransactionProps } from "../schemas";
import { handleError, jsonUserParser } from "@/functions";
import { cardDetailSubmit } from "./cardDetailSubmit";
import { getHistory } from "../../../functions";
import { type TransactionData } from "@/types";
import { API_BASE_URL, CARD_TRANSACTION_ENDPOINT } from "@/utils/apiPaths";

export interface cardTransactionResponseProps {
  success: boolean;
  message: string;
  transactionData?: TransactionData;
}

export default async function cardTransactionSubmit(
  data: cardTransactionProps
): Promise<cardTransactionResponseProps> {
  const { cardData } = data;

  const { token } = jsonUserParser(sessionStorage.getItem("userData"));

  try {
    const response = await axios.post(`${API_BASE_URL}${CARD_TRANSACTION_ENDPOINT}`,
      {
        password: cardData.password,
        card_type: cardData.card_type,
        value: cardData.value
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

    if (response.status === 201) {
      if (cardData.card_type.toLowerCase() === "credit") {
        const cardDetailResponse = await cardDetailSubmit();
        sessionStorage.setItem("cardsData", JSON.stringify(cardDetailResponse.message));

        const transactionsDetailResponse = await getHistory();
        sessionStorage.setItem("historyData", JSON.stringify(transactionsDetailResponse.message));
      }
      return {
        success: true,
        message: "Card transaction was successful.",
        transactionData: response.data
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
