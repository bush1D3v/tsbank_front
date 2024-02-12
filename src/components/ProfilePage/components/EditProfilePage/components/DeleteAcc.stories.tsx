import { withRouter } from "storybook-addon-react-router-v6";
import DeleteAcc from "./DeleteAcc";
import { type Meta } from "@storybook/react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

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

export const WithHeaderAndFooter = () =>
  <div className="h-[100dvh] flex justify-between flex-col">
    <Header />
    <div className="flex justify-center">
      <DeleteAcc />
    </div>
    <Footer />
  </div>;
