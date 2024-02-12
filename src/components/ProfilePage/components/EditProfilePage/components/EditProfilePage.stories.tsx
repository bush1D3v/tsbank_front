import { withRouter } from "storybook-addon-react-router-v6";
import EditProfilePage from "./EditProfilePage";
import { type Meta } from "@storybook/react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const meta: Meta<typeof EditProfilePage> = {
  title: "Pages/ProfilePage/EditProfilePage",
  component: EditProfilePage,
  decorators: [ withRouter ]
};

export default meta;

export const Default = () =>
  <div className="h-[100dvh] flex items-center justify-center">
    <EditProfilePage />
  </div>;

export const WithHeaderAndFooter = () =>
  <>
    <Header />
    <div className="flex items-center justify-center">
      <EditProfilePage />
    </div>
    <Footer />
  </>;
