import axios from "axios";
import { handleError, jsonUserParser } from "@/functions";
import { type CardData } from "@/types";
import { API_BASE_URL, CARD_DETAIL_ENDPOINT } from "@/utils/apiPaths";

export interface CardDetailResponseProps {
  success: boolean;
  message: CardData[] | string;
}

export async function cardDetailSubmit(): Promise<CardDetailResponseProps> {
  const { token } = jsonUserParser(sessionStorage.getItem("userData"));

  try {
    const response = await axios.get(`${API_BASE_URL}${CARD_DETAIL_ENDPOINT}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

    if (response.status === 200) {
      return {
        success: true,
        message: response.data
      };
    } else {
      return {
        success: false,
        message: response.data,
      };
    }
  } catch (error) {
    return handleError(error);
  }
}
