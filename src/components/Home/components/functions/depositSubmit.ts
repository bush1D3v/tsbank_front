import axios from "axios";

import { depositProps } from "../schemas";
import { handleError, jsonUserParser } from "../../../../functions";
import { API_URL_BASE, DEPOSIT_ENDPOINT } from "../../../../utils";
import { getHistory } from ".";

interface depositResponseProps {
  success: boolean;
  message: string;
}

export default async function depositSubmit(
  data: depositProps
): Promise<depositResponseProps> {
  const { userData } = data;

  const { token } = jsonUserParser(sessionStorage.getItem("userInfo"));

  try {
    const response = await axios.post(`${API_URL_BASE}${DEPOSIT_ENDPOINT}`,
      {
        email: userData.email,
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
