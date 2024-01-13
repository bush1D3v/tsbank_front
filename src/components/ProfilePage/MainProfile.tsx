import { type ReactElement } from "react";
import { useLocation } from "react-router-dom";
import { MainEditProfile, ProfilePage } from "./components";

export default function MainProfile(): ReactElement {
  const { pathname } = useLocation();

  const {
    VITE_REACT_APP_PROFILE,
    VITE_REACT_APP_DELETE_USER,
    VITE_REACT_APP_UPDATE_PHONE,
    VITE_REACT_APP_UPDATE_EMAIL,
    VITE_REACT_APP_UPDATE_PASSWORD,
    VITE_REACT_APP_UPDATE_ALL,
    VITE_REACT_APP_UPDATE
  } = import.meta.env;

  const handleFormType = (currPath: string): ReactElement => {
    switch (currPath) {
      case VITE_REACT_APP_PROFILE:
        return <ProfilePage />;
      case VITE_REACT_APP_UPDATE:
        return <MainEditProfile />;
      case VITE_REACT_APP_UPDATE_ALL:
        return <MainEditProfile />;
      case VITE_REACT_APP_UPDATE_EMAIL:
        return <MainEditProfile />;
      case VITE_REACT_APP_UPDATE_PASSWORD:
        return <MainEditProfile />;
      case VITE_REACT_APP_UPDATE_PHONE:
        return <MainEditProfile />;
      case VITE_REACT_APP_DELETE_USER:
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
