import axios from "axios";

import { type creditPaymentProps } from "../schemas";
import { handleError, jsonUserParser } from "../../../../../../functions";
import { cardDetailSubmit } from ".";
import { getHistory } from "../../../functions";

interface creditPaymentResponseProps {
  success: boolean;
  message: string;
}

export default async function creditPaymentSubmit(
  data: creditPaymentProps
): Promise<creditPaymentResponseProps> {
  const { userData } = data;

  const { token } = jsonUserParser(sessionStorage.getItem("userData"));

  const {
    VITE_REACT_APP_API_BASE_URL,
    VITE_REACT_APP_CREDIT_PAYMENT_ENDPOINT
  } = import.meta.env;

  try {
    const response = await axios.post(`${VITE_REACT_APP_API_BASE_URL}${VITE_REACT_APP_CREDIT_PAYMENT_ENDPOINT}`,
      {
        password: userData.password,
        value: userData.value
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

    if (response.status === 201) {
      const detailResponse = await cardDetailSubmit();
      sessionStorage.setItem("cardsData", JSON.stringify(detailResponse.message));

      const transactionsDetailResponse = await getHistory();
      sessionStorage.setItem("historyData", JSON.stringify(transactionsDetailResponse.message));
      return {
        success: true,
        message: response.data
      };
    } else {
      return {
        success: false,
        message: "An error occurred while making a credit payment.",
      };
    }
  } catch (error) {
    return handleError(error);
  }
}
