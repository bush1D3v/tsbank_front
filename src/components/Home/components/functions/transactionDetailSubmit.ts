import axios from "axios";

import { handleError, jsonUserParser } from "../../../../functions";

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

  const {
    VITE_REACT_APP_API_BASE_URL,
    VITE_REACT_APP_DETAIL_TRANSACTION_ENDPOINT
  } = import.meta.env;

  try {
    const response = await axios.get(`${VITE_REACT_APP_API_BASE_URL}${VITE_REACT_APP_DETAIL_TRANSACTION_ENDPOINT}/${id}`,
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
