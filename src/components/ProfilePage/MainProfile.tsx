import { type ReactElement } from "react";
import { useLocation } from "react-router-dom";
import { MainEditProfile, ProfilePage } from "./components";
import {
  PROFILE,
  DELETE_USER,
  UPDATE_PHONE,
  UPDATE_EMAIL,
  UPDATE_PASSWORD,
  UPDATE_ALL,
  UPDATE
} from "@/utils/routerPaths";

export default function MainProfile(): ReactElement {
  const { pathname } = useLocation();

  const handleFormType = (currPath: string): ReactElement => {
    switch (currPath) {
      case PROFILE:
        return <ProfilePage />;
      case UPDATE:
        return <MainEditProfile />;
      case UPDATE_ALL:
        return <MainEditProfile />;
      case UPDATE_EMAIL:
        return <MainEditProfile />;
      case UPDATE_PASSWORD:
        return <MainEditProfile />;
      case UPDATE_PHONE:
        return <MainEditProfile />;
      case DELETE_USER:
        return <MainEditProfile />;
      default:
        return <ProfilePage />;
    }
  };

  return (
    <main className="h-[82dvh] flex items-center px-2 justify-center flex-col animate-fade animate-duration-500 ease-linear">
      {handleFormType(pathname)}
    </main>
  );
}
