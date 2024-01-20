import { withRouter } from "storybook-addon-react-router-v6";
import Layout from "./Layout";
import { type Meta } from "@storybook/react";
import MainProfile from "../ProfilePage";

const meta: Meta<typeof Layout> = {
  title: "Layout",
  component: Layout,
  decorators: [ withRouter ]
};

export default meta;

export const Default = () =>
  <Layout>
    <MainProfile />
  </Layout>;
