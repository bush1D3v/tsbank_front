import axios from "axios";

import { withdrawProps } from "../schemas";
import { handleError, jsonUserParser } from "@/functions";
import { getHistory } from "./getHistory";
import { type TransactionData } from "@/types";

export interface withdrawResponseProps {
  success: boolean;
  message: string;
  transactionData?: TransactionData;
}

export default async function withdrawSubmit(
  data: withdrawProps
): Promise<withdrawResponseProps> {
  const { transactionData } = data;

  const { token } = jsonUserParser(sessionStorage.getItem("userData"));

  const {
    VITE_REACT_APP_API_BASE_URL,
    VITE_REACT_APP_WITHDRAW_ENDPOINT
  } = import.meta.env;

  try {
    const response = await axios.post(`${VITE_REACT_APP_API_BASE_URL}${VITE_REACT_APP_WITHDRAW_ENDPOINT}`,
      {
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
        message: "Withdraw successfully submitted!",
        transactionData: response.data
      };
    } else {
      return {
        success: false,
        message: "An error occurred while email exchange.",
      };
    }
  } catch (error) {
    return handleError(error);
  }
}
