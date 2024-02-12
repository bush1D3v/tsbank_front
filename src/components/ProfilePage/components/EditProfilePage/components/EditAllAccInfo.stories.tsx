import { withRouter } from "storybook-addon-react-router-v6";
import EditAllAccInfo from "./EditAllAccInfo";
import { type Meta } from "@storybook/react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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

export const WithHeaderAndFooter = () =>
  <div className="h-[100dvh] flex justify-between flex-col">
    <Header />
    <div className="flex justify-center">
      <EditAllAccInfo />
    </div>
    <Footer />
  </div>;
