import axios from "axios";

import { handleError, jsonUserParser } from "../../../../../../functions";
import { API_URL_BASE, CARD_DETAIL_ENDPOINT } from "../../../../../../utils";

export interface CardData {
  credit?: {
    id: number;
    card_number: string;
    cardholder_name: string;
    expiration_date: string;
    cvv: string;
    user_id: number;
    created_at: string;
    balance: number;
  };
  debit?: {
    id: number;
    card_number: string;
    cardholder_name: string;
    expiration_date: string;
    cvv: string;
    user_id: number;
    created_at: string;
  };
}

export interface CardDetailResponseProps {
  success: boolean;
  message: CardData[] | string;
}

export async function cardDetailSubmit(): Promise<CardDetailResponseProps> {
  const { token } = jsonUserParser(sessionStorage.getItem("userInfo"));

  try {
    const response = await axios.get(`${API_URL_BASE}${CARD_DETAIL_ENDPOINT}`,
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
