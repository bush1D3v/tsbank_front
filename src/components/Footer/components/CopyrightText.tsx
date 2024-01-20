import { type ReactElement } from "react";

export default function CopyrightText(): ReactElement {
  return (
    <span
      className="lg:text-xl self-center"
      data-testid="CopyrightText"
    >
      TSBank <br /> Corporation &copy;
    </span>
  );
}
