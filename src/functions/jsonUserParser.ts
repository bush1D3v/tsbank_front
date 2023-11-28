import { UserData } from "../types";

export default function jsonUserParser(localStorageItem: string | null): UserData {
  const jsonData: UserData = localStorageItem ? JSON.parse(localStorageItem) : {
    user: {
      balance: 0,
      cpf: "00000000000",
      email: "null@gmail.com",
      id: 0,
      name: "null name",
      phone: "00000000000"
    },
    token: "null"
  };

  return jsonData;
}
