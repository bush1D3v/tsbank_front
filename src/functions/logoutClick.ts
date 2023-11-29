import { useNavigate } from "react-router-dom";

export default function logoutClick(to: string) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const navigation = useNavigate();

  const makeLogout = () => {
    navigation(to);
    localStorage.setItem("isLoggedIn", "false");
    window.location.reload();
  };

  return makeLogout;
}
