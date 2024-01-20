import { withRouter } from "storybook-addon-react-router-v6";
import ChangeEmail from "./ChangeEmail";
import { type Meta } from "@storybook/react";
import Footer from "../../../../Footer";
import Header from "../../../../Header";

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

export const WithHeaderAndFooter = () =>
  <div className="h-[100dvh] flex justify-between flex-col">
    <Header />
    <div className="flex justify-center">
      <ChangeEmail />
    </div>
    <Footer />
  </div>;
