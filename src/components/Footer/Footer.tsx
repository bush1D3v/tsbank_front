import { type ReactElement } from "react";
import {
  ArrowUp,
  CopyrightText,
  DedicationText
} from "./components";

export default function Footer(): ReactElement {
  return (
    <footer className="text-sm bg-saturatedBlue flex h-[9dvh] justify-between py-2 px-4
    relative animate-fade-down animate-duration-500 animate-ease-in-out">
      <CopyrightText />
      <DedicationText />
      <ArrowUp />
    </footer>
  );
}
