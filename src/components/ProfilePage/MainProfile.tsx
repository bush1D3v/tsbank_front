import { type ReactElement } from "react";
import { useLocation } from "react-router-dom";
import { MainEditProfile, ProfilePage } from "./components";
import {
  PROFILE,
  EDIT,
  EDIT_ALL,
  EDIT_EMAIL,
  EDIT_PASSWORD,
  EDIT_PHONE,
  DELETE_USER
} from "../../utils";

export default function MainProfile(): ReactElement {
  const { pathname } = useLocation();

  const handleFormType = (currPath: string): ReactElement => {
    switch (currPath) {
      case PROFILE:
        return <ProfilePage />;
      case EDIT:
        return <MainEditProfile />;
      case EDIT_ALL:
        return <MainEditProfile />;
      case EDIT_EMAIL:
        return <MainEditProfile />;
      case EDIT_PASSWORD:
        return <MainEditProfile />;
      case EDIT_PHONE:
        return <MainEditProfile />;
      case DELETE_USER:
        return <MainEditProfile />;
      default:
        return <ProfilePage />;
    }
  };

  return (
    <main className="h-[82dvh] flex items-center px-2 justify-center flex-col">
      {handleFormType(pathname)}
    </main>
  );
}
