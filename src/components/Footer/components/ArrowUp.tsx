import { type ReactElement } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function ArrowUp(): ReactElement {
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  return (
    <FaArrowUp className="my-auto text-4xl cursor-pointer hover:text-darkBlue transition-all delay-75" onClick={scrollToTop} />
  );
}
