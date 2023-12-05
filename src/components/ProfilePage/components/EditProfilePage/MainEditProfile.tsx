import { type ReactElement } from "react";
import { useLocation } from "react-router-dom";
import {
  DELETE_USER,
  EDIT,
  EDIT_ALL,
  EDIT_EMAIL,
  EDIT_PASSWORD,
  EDIT_PHONE
} from "../../../../utils";
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

  const handleFormType = (currPath: string): ReactElement => {
    switch (currPath) {
      case EDIT:
        return <EditProfilePage />;
      case EDIT_EMAIL:
        return <ChangeEmail />;
      case EDIT_PASSWORD:
        return <ChangePassword />;
      case EDIT_PHONE:
        return <ChangePhone />;
      case EDIT_ALL:
        return <EditAllAccInfo />;
      case DELETE_USER:
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
