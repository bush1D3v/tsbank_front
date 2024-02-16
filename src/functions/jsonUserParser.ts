import { type UserData } from "@/types";

export default function jsonUserParser(sessionStorageItem: string | null): UserData {
  const jsonData: UserData = sessionStorageItem ? JSON.parse(sessionStorageItem) : {
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
