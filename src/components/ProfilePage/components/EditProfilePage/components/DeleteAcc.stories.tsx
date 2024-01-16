import { withRouter } from "storybook-addon-react-router-v6";
import DeleteAcc from "./DeleteAcc";
import { Meta } from "@storybook/react";

const meta: Meta<typeof DeleteAcc> = {
  title: "Pages/ProfilePage/EditProfilePage/DeleteAcc",
  component: DeleteAcc,
  decorators: [ withRouter ]
};

export default meta;

export const Default = () =>
  <div className="h-[100dvh] flex items-center justify-center">
    <DeleteAcc />
  </div>;
