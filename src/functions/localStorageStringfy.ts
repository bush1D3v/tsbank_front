import { jsonUserParser } from ".";

interface localStorageStringfyProps {
  param: "email" | "phone";
  token: string;
  newValue: string;
}

export default function localStorageStringfy({ param, token, newValue }: localStorageStringfyProps): void {
  const { user } = jsonUserParser(localStorage.getItem("userInfo"));
  user[ param ] = newValue;

  const newUser = JSON.stringify({
    user,
    token
  });
  localStorage.setItem("userInfo", newUser);
}
