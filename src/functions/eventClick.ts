import { MouseEventHandler } from "react";

interface EventClickProps {
  func: (param: string) => void;
  param: string;
}

export default function eventClick({ func, param }: EventClickProps) {
  const handleClick: MouseEventHandler<HTMLAnchorElement> = (event) => {
    event.preventDefault();
    func(param);
  };

  return handleClick;
}
