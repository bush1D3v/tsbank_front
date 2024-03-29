import { withRouter } from "storybook-addon-react-router-v6";
import ChangePhone from "./ChangePhone";
import { type Meta } from "@storybook/react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

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

export const WithHeaderAndFooter = () =>
  <div className="h-[100dvh] flex justify-between flex-col">
    <Header />
    <div className="flex justify-center">
      <ChangePhone />
    </div>
    <Footer />
  </div>;
