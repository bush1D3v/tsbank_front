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
import {
  DELETE_USER,
  UPDATE_PHONE,
  UPDATE_EMAIL,
  UPDATE_PASSWORD,
  UPDATE_ALL,
  UPDATE
} from "@/utils/routerPaths";

export default function MainEditProfile(): ReactElement {
  const { pathname } = useLocation();

  const handleFormType = (currPath: string): ReactElement => {
    switch (currPath) {
      case UPDATE:
        return <EditProfilePage />;
      case UPDATE_EMAIL:
        return <ChangeEmail />;
      case UPDATE_PASSWORD:
        return <ChangePassword />;
      case UPDATE_PHONE:
        return <ChangePhone />;
      case UPDATE_ALL:
        return <EditAllAccInfo />;
      case DELETE_USER:
        return <DeleteAcc />;
      default:
        return <EditProfilePage />;
    }
  };

  return (
    <div className="animate-fade animate-duration-500 animate-ease-in-out w-full h-full flex items-center justify-center">
      {handleFormType(pathname)}
    </div>
  );
}
