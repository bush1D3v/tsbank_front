import { withRouter } from "storybook-addon-react-router-v6";
import ChangePhone from "./ChangePhone";
import { Meta } from "@storybook/react";

const meta: Meta<typeof ChangePhone> = {
  title: "Pages/ProfilePage/EditProfilePage/ChangePhone",
  component: ChangePhone,
  decorators: [ withRouter ]
};

export default meta;

export const Default = () =>
  <div className="h-[100dvh] flex items-center justify-center">
    <ChangePhone />
  </div>;
