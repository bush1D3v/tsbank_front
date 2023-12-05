import { type ReactElement } from "react";
import { FaArrowUp } from "react-icons/fa";

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

export default function Footer(): ReactElement {
  return (
    <footer className="text-sm bg-saturatedBlue flex h-[9dvh] justify-between py-2 px-4 relative">
      <span className="md:text-xl my-auto">TSBank <br /> Corporation &copy;</span>
      <p className="absolute left-20 right-20 md:static md:mr-[10dvw] lg:mr-[7dvw] xl:mr-[4dvw] md:text-xl md:my-auto text-center">
        Make with 💖 <br /> by <a
          className="font-bold underline cursor-pointer hover:text-darkBlue transition-all"
          href="https://linktr.ee/bush1D3v"
          target="_blank"
        >
          bush1D3v
        </a>
      </p>
      <FaArrowUp className="my-auto text-4xl cursor-pointer hover:text-darkBlue transition-all delay-75" onClick={scrollToTop} />
    </footer>
  );
}
