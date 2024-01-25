import axios from "axios";

import { pixProps } from "../schemas";
import { handleError, jsonUserParser } from "../../../../functions";
import { getHistory } from ".";
import { type TransactionData } from "../../../../types";

export interface pixResponseProps {
  success: boolean;
  message: string;
  transactionData?: TransactionData;
}

export default async function pixSubmit(
  data: pixProps
): Promise<pixResponseProps> {
  const { transactionData } = data;

  const { token } = jsonUserParser(sessionStorage.getItem("userData"));

  const {
    VITE_REACT_APP_API_BASE_URL,
    VITE_REACT_APP_PIX_ENDPOINT
  } = import.meta.env;

  try {
    const response = await axios.post(`${VITE_REACT_APP_API_BASE_URL}${VITE_REACT_APP_PIX_ENDPOINT}`,
      {
        cpf: transactionData.cpf,
        value: transactionData.value,
        password: transactionData.password,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

    if (response.status === 201) {
      const transactionsDetailResponse = await getHistory();
      sessionStorage.setItem("historyData", JSON.stringify(transactionsDetailResponse.message));
      return {
        success: true,
        message: "Pix successfully submitted!",
        transactionData: response.data
      };
    } else {
      return {
        success: false,
        message: "An error occurred while a submit.",
      };
    }
  } catch (error) {
    return handleError(error);
  }
}
