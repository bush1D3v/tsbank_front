import axios from "axios";

import { pixProps } from "../schemas";
import { handleError, jsonUserParser } from "../../../../functions";
import { API_URL_BASE, PIX_ENDPOINT } from "../../../../utils";
import { getHistory } from ".";

interface pixResponseProps {
  success: boolean;
  message: string;
}

export default async function pixSubmit(
  data: pixProps
): Promise<pixResponseProps> {
  const { userData } = data;

  const { token } = jsonUserParser(sessionStorage.getItem("userInfo"));

  try {
    const response = await axios.post(`${API_URL_BASE}${PIX_ENDPOINT}`,
      {
        cpf: userData.cpf,
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
        message: "An error occurred while a submit.",
      };
    }
  } catch (error) {
    return handleError(error);
  }
}
