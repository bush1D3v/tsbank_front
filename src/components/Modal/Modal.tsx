import { type ReactElement } from "react";

interface ModalProps {
  isOpen: boolean;
  setOpen: (isOpen: boolean) => void;
  description: string;
  title: string;
  btnMessage: string;
}

export default function Modal({
  isOpen,
  setOpen,
  description,
  title,
  btnMessage,
}: ModalProps): ReactElement {
  if (isOpen) {
    return (
      <div className="fixed top-0 bottom-0 left-0 right-0 bg-[#00000090]">
        <div
          className="fixed top-2/4 left-2/4 translate-x-[-50%] translate-y-[-50%]
          bg-background text-background p-8 rounded-3xl w-11/12 md:w-[52.5%] lg:w-2/5 xl:w-[30%]
          h-3/6 md:h-[35%] lg:h-2/5 flex flex-col justify-evenly
        "
        >
          <h2 className="text-4xl mb-2 font-bold text-text">{title}</h2>
          <p className="text-text mb-3 text-2xl">{description}</p>
          <button
            type="button"
            className="text-text px-7 py-2 bg-secondary font-bold rounded-[10px] text-xl hover:text-accent transition-colors"
            onClick={() => {
              setOpen(!isOpen);
            }}
          >
            {btnMessage}
          </button>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
}
