import axios from "axios";
import { pixProps } from "../schemas";
import { handleError, jsonUserParser } from "@/functions";
import { getHistory } from "./getHistory";
import { type TransactionData } from "@/types";
import { API_BASE_URL, PIX_ENDPOINT } from "@/utils/apiPaths";

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

  try {
    const response = await axios.post(`${API_BASE_URL}${PIX_ENDPOINT}`,
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
