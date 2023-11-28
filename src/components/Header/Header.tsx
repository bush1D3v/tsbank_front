import { type ReactElement } from "react";
import { Logo, NavLinks, Profile } from "./components";

export function Header(): ReactElement {
  return (
    <header className="bg-saturedBlue flex h-[9dvh] items-center justify-between py-2 px-4">
      <Logo />
      <NavLinks />
      <Profile />
    </header>
  );
}
