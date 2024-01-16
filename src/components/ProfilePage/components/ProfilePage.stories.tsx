import { withRouter } from "storybook-addon-react-router-v6";
import ProfilePage from "./ProfilePage";
import { Meta } from "@storybook/react";
import Header from "../../Header";
import Footer from "../../Footer";

const meta: Meta<typeof ProfilePage> = {
  title: "Pages/ProfilePage",
  component: ProfilePage,
  decorators: [ withRouter ]
};

export default meta;

export const Default = () =>
  <div className="m-auto max-w-[500px]">
    <ProfilePage />
  </div>;

export const WithHeaderAndFooter = () =>
  <>
    <Header />
    <div className="m-auto max-w-[500px]">
      <ProfilePage />
    </div>
    <Footer />
  </>;
