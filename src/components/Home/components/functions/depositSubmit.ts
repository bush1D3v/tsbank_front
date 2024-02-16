import axios from "axios";
import { depositProps } from "../schemas";
import { handleError, jsonUserParser } from "@/functions";
import { getHistory } from "./getHistory";
import { type TransactionData } from "@/types";
import { API_BASE_URL, DEPOSIT_ENDPOINT } from "@/utils/apiPaths";

export interface depositResponseProps {
  success: boolean;
  message: string;
  transactionData?: TransactionData
}

export default async function depositSubmit(
  data: depositProps
): Promise<depositResponseProps> {
  const { transactionData } = data;

  const { token } = jsonUserParser(sessionStorage.getItem("userData"));

  try {
    const response = await axios.post(`${API_BASE_URL}${DEPOSIT_ENDPOINT}`,
      {
        email: transactionData.email,
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
        message: "Deposit successfully submitted!",
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
