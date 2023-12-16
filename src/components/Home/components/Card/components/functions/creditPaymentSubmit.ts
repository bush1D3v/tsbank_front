import axios from "axios";

import { type creditPaymentProps } from "../schemas";
import { handleError, jsonUserParser } from "../../../../../../functions";
import { API_URL_BASE, CREDIT_PAYMENT_ENDPOINT } from "../../../../../../utils";
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

  const { token } = jsonUserParser(sessionStorage.getItem("userInfo"));

  try {
    const response = await axios.post(`${API_URL_BASE}${CREDIT_PAYMENT_ENDPOINT}`,
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
      sessionStorage.setItem("cardsInfo", JSON.stringify(detailResponse.message));

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
