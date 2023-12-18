import axios from "axios";

import { handleError, jsonUserParser } from "../../../../functions";
import { API_URL_BASE, DETAIL_TRANSACTION_ENDPOINT } from "../../../../utils";

export interface SummaryData {
  id: number;
  description: string;
  value: number;
  date: string;
  user_id: number;
  type: string;
}

export interface SummaryResponseProps {
  success: boolean;
  message: SummaryData | string;
}

export async function detailTransactionSubmit(id: string): Promise<SummaryResponseProps> {
  const { token } = jsonUserParser(sessionStorage.getItem("userInfo"));

  try {
    const response = await axios.get(`${API_URL_BASE}${DETAIL_TRANSACTION_ENDPOINT}/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (response.status === 200) {
      sessionStorage.setItem("historyTest", JSON.stringify(response.data));
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
