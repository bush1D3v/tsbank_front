import { useNavigate } from "react-router-dom";

export default function handleLinkClick(to: string) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const navigation = useNavigate();

  const navigate = () => {
    navigation(to);
  };

  return navigate;
}
