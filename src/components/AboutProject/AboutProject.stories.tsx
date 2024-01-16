import { withRouter } from "storybook-addon-react-router-v6";
import Footer from "../Footer";
import Header from "../Header";
import AboutProject from "./AboutProject";

export default {
  title: "Pages/AboutProject",
  component: AboutProject,
  decorators: [ withRouter ]
};

export const Default = {};

export const WithHeaderAndFooter = () =>
  <>
    <Header />
    <AboutProject />
    <Footer />
  </>;
