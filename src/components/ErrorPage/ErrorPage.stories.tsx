import { withRouter } from "storybook-addon-react-router-v6";
import ErrorPage from "./ErrorPage";

export default {
  title: "Components/ErrorPage",
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
