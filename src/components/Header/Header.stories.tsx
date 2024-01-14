import { withRouter } from "storybook-addon-react-router-v6";
import Header from "./Header";

export default {
  title: "Components/Header",
  component: Header,
  decorators: [ withRouter ]
};

export const Default = {};
