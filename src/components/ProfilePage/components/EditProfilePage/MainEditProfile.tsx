import { type ReactElement } from "react";
import { useLocation } from "react-router-dom";
import {
  EditProfilePage,
  ChangeEmail,
  ChangePassword,
  ChangePhone,
  EditAllAccInfo,
  DeleteAcc
} from "./components";

export default function MainEditProfile(): ReactElement {
  const { pathname } = useLocation();

  const {
    VITE_REACT_APP_DELETE_USER,
    VITE_REACT_APP_UPDATE_PHONE,
    VITE_REACT_APP_UPDATE_EMAIL,
    VITE_REACT_APP_UPDATE_PASSWORD,
    VITE_REACT_APP_UPDATE_ALL,
    VITE_REACT_APP_UPDATE
  } = import.meta.env;

  const handleFormType = (currPath: string): ReactElement => {
    switch (currPath) {
      case VITE_REACT_APP_UPDATE:
        return <EditProfilePage />;
      case VITE_REACT_APP_UPDATE_EMAIL:
        return <ChangeEmail />;
      case VITE_REACT_APP_UPDATE_PASSWORD:
        return <ChangePassword />;
      case VITE_REACT_APP_UPDATE_PHONE:
        return <ChangePhone />;
      case VITE_REACT_APP_UPDATE_ALL:
        return <EditAllAccInfo />;
      case VITE_REACT_APP_DELETE_USER:
        return <DeleteAcc />;
      default:
        return <EditProfilePage />;
    }
  };

  return (
    <>
      {handleFormType(pathname)}
    </>
  );
}
