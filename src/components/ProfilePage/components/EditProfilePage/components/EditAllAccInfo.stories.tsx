import { withRouter } from "storybook-addon-react-router-v6";
import EditAllAccInfo from "./EditAllAccInfo";
import { Meta } from "@storybook/react";

const meta: Meta<typeof EditAllAccInfo> = {
  title: "Pages/ProfilePage/EditProfilePage/EditAllAccInfo",
  component: EditAllAccInfo,
  decorators: [ withRouter ]
};

export default meta;

export const Default = () =>
  <div className="h-[100dvh] flex items-center justify-center">
    <EditAllAccInfo />
  </div>;
