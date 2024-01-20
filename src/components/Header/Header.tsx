import { type ReactElement } from "react";
import { Logo, NavLinks, Profile } from "./components";

export default function Header(): ReactElement {
  return (
    <header className="bg-saturatedBlue flex h-[9dvh] items-center justify-between py-2 px-4 animate-fade-down animate-duration-500 animate-ease-in-out"
      data-testid="Header">
      <Logo />
      <NavLinks />
      <Profile />
    </header>
  );
}
