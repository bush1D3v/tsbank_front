import { withRouter } from "storybook-addon-react-router-v6";
import ErrorPage from "./ErrorPage";

export default {
  title: "Pages/ErrorPage",
  component: ErrorPage,
  decorators: [ withRouter ]
};

export const Default = {
  args: {
    error: {
      status: 404
    }
  }
};
