import { type ReactElement } from "react";
import { CgProfile } from "react-icons/cg";
import { PROFILE } from "@/utils/routerPaths";

export default function Profile(): ReactElement {
  return (
    <a
      className="cursor-pointer transition-all delay-75 relative h-full hover:opacity-50"
      data-testid="Profile"
      href={PROFILE}
      aria-label="Profile">
      <CgProfile className="h-full w-full" data-testid="ProfileIcon" />
    </a>
  );
}
