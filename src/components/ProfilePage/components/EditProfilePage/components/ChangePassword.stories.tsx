import { withRouter } from "storybook-addon-react-router-v6";
import ChangePassword from "./ChangePassword";
import { Meta } from "@storybook/react";

const meta: Meta<typeof ChangePassword> = {
  title: "Pages/ProfilePage/EditProfilePage/ChangePassword",
  component: ChangePassword,
  decorators: [ withRouter ]
};

export default meta;

export const Default = () =>
  <div className="h-[100dvh] flex items-center justify-center">
    <ChangePassword />
  </div>;
