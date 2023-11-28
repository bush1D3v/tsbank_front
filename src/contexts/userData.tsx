import { type ReactElement, createContext, useState } from "react";

import { type User } from "../types";

const userInfo = localStorage.getItem("userInfo");

interface ProviderProp {
  children: React.ReactNode;
}

const initialUser: User = {
  id: 0,
  name: "",
  balance: 0,
  cpf: "00000000000",
  email: "exemplo@email.com",
  phone: "21123456789"
};

const prevUserInfo = (): User => {
  if (userInfo !== null && userInfo !== undefined) {
    return JSON.parse(userInfo);
  } else {
    return initialUser;
  }
};

export const UserDataContext = createContext<{
  userData: User;
  setUserData: React.Dispatch<React.SetStateAction<User>>;
  isUserLoggedIn: boolean;
  setIsUserLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}>({
  userData: prevUserInfo(),
  setUserData: () => { },
  isUserLoggedIn: false,
  setIsUserLoggedIn: () => { },
});

export const UserDataProvider = ({ children }: ProviderProp): ReactElement => {
  const [ userData, setUserData ] = useState(prevUserInfo);
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  const [ isUserLoggedIn, setIsUserLoggedIn ] = useState<boolean>(isLoggedIn);

  return (
    <UserDataContext.Provider
      value={{ userData, setUserData, isUserLoggedIn, setIsUserLoggedIn }}
    >
      {children}
    </UserDataContext.Provider>
  );
};
