import axios from "axios";
import { handleError, jsonUserParser } from "@/functions";
import { API_BASE_URL, HISTORY_ENDPOINT } from "@/utils/apiPaths";

export interface HistoryData {
  id: number;
  description: string;
  value: number;
  date: string;
  user_id: number;
  type: string;
}

export interface HistoryResponseProps {
  success: boolean;
  message: HistoryData[] | string;
}

export async function getHistory(): Promise<HistoryResponseProps> {
  const { token } = jsonUserParser(sessionStorage.getItem("userData"));

  try {
    const response = await axios.get(`${API_BASE_URL}${HISTORY_ENDPOINT}`,
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
        message: "An error occurred while getting a user history.",
      };
    }
  } catch (error) {
    return handleError(error);
  }
}
