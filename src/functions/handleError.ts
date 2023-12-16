import { AxiosError, isAxiosError } from "axios";

export default function handleError(error: AxiosError | unknown) {
  if (isAxiosError(error)) {
    const axiosError: AxiosError = error;
    if (
      axiosError.response &&
      axiosError.response.data &&
      typeof axiosError.response.data === "object" &&
      "message" in axiosError.response.data &&
      typeof axiosError.response.data.message === "string"
    ) {
      const returnedError = `Error ${axiosError.response.status}: ` +
        axiosError.response.data.message.charAt(0).toUpperCase() +
        axiosError.response.data.message.slice(1) + ".";
      return {
        success: false,
        message: returnedError,
      };
    } else if (axiosError.request) {
      return {
        success: false,
        message: "No response received from the server.",
      };
    } else {
      return {
        success: false,
        message: "Error during the request.",
      };
    }
  } else {
    return {
      success: false,
      message: "Error 500: An unexpected error occurred.",
    };
  }
}
