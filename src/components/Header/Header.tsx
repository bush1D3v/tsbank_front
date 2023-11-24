import { type ReactElement } from "react";
import { Logo, NavLinks, Profile } from "./components";

export function Header(): ReactElement {
  return (
    <header className="bg-saturedBlue flex h-[8vh] items-center justify-between px-2">
      <Logo />
      <NavLinks />
      <Profile />
    </header>
  );
}
