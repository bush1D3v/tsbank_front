import { jsonUserParser } from ".";

interface sessionStorageStringifyProps {
  param: "email" | "phone";
  token: string;
  newValue: string;
}

export default function sessionStorageStringify({
  param,
  token,
  newValue
}: sessionStorageStringifyProps): void {
  const { user } = jsonUserParser(sessionStorage.getItem("userInfo"));
  user[ param ] = newValue;

  const newUser = JSON.stringify({
    user,
    token
  });

  sessionStorage.setItem("userInfo", newUser);
}
