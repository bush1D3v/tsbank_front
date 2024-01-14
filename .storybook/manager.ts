import { addons } from '@storybook/manager-api';
import { create } from '@storybook/theming';

addons.setConfig({
  theme: create({
    base: "dark",
    textColor: "white",
    appPreviewBg: "#3178C6",
    brandTitle: "Victor Navarro Portfólio",
    brandUrl: "https://bush1d3v-portfolio.vercel.app/",
    brandImage: "/tsbank-complete-logo.png",
    brandTarget: "_self",
  }),
});
