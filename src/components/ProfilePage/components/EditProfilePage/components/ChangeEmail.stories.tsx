import { withRouter } from "storybook-addon-react-router-v6";
import ChangeEmail from "./ChangeEmail";
import { Meta } from "@storybook/react";

const meta: Meta<typeof ChangeEmail> = {
  title: "Pages/ProfilePage/EditProfilePage/ChangeEmail",
  component: ChangeEmail,
  decorators: [ withRouter ]
};

export default meta;

export const Default = () =>
  <div className="h-[100dvh] flex items-center justify-center">
    <ChangeEmail />
  </div>;
