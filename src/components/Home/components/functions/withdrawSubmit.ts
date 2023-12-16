import axios from "axios";

import { withdrawProps } from "../schemas";
import { handleError, jsonUserParser } from "../../../../functions";
import { API_URL_BASE, WITHDRAW_ENDPOINT } from "../../../../utils";
import { getHistory } from ".";

interface withdrawResponseProps {
  success: boolean;
  message: string;
}

export default async function withdrawSubmit(
  data: withdrawProps
): Promise<withdrawResponseProps> {
  const { userData } = data;

  const { token } = jsonUserParser(sessionStorage.getItem("userInfo"));

  try {
    const response = await axios.post(`${API_URL_BASE}${WITHDRAW_ENDPOINT}`,
      {
        value: userData.value,
        password: userData.password,
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
        message: response.data
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
