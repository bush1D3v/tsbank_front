import { withRouter } from "storybook-addon-react-router-v6";
import ChangePassword from "./ChangePassword";
import { type Meta } from "@storybook/react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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

export const WithHeaderAndFooter = () =>
  <div className="h-[100dvh] flex justify-between flex-col">
    <Header />
    <div className="flex justify-center">
      <ChangePassword />
    </div>
    <Footer />
  </div>;
