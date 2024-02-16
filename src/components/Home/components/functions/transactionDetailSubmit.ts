import axios from "axios";
import { handleError, jsonUserParser } from "@/functions";
import { API_BASE_URL, DETAIL_TRANSACTION_ENDPOINT } from "@/utils/apiPaths";

export interface SummaryData {
  id: number;
  description: string;
  value: number;
  date: string;
  user_id: number;
  type: string;
  input?: number;
  output?: number;
}

export interface SummaryResponseProps {
  success: boolean;
  message: SummaryData | string;
}

export async function transactionDetailSubmit(id: string): Promise<SummaryResponseProps> {
  const { token } = jsonUserParser(sessionStorage.getItem("userData"));

  try {
    const response = await axios.get(`${API_BASE_URL}${DETAIL_TRANSACTION_ENDPOINT}/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (response.status === 200) {
      return {
        success: true,
        message: response.data
      };
    } else {
      return {
        success: false,
        message: "An error occurred while getting a transaction summary.",
      };
    }
  } catch (error) {
    return handleError(error);
  }
}
