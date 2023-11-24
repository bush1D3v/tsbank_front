import { type ReactElement } from "react";
import { BsBank } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { HOME } from "../../../utils";

export default function Logo(): ReactElement {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate(HOME);
  };

  return (
    <a
      onClick={handleLogoClick}
      className="bank h-100% cursor-pointer text-5xl md:text-7xl lg:text-6xl hover:text-darkBlue
      transition-all delay-75 relative">
      <BsBank />
    </a>
  );
}
