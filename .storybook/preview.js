import "!style-loader!css-loader!sass-loader!../src/scss/custom.scss";
import React from "react";
import light from "../src/theme/light";
import dark from "../src/theme/dark";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

// import useMediaQuery from "@material-ui/core/useMediaQuery";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  backgrounds: {
    default: "light",
    values: [
      {
        name: "dark",
        value: "#161C2D",
      },
      {
        name: "light",
        value: "#ffffff",
      },
    ],
  },
  layout: "fullscreen",
};

export const decorators = [
  (Story, context) => {
    const background = context.globals.backgrounds;
    // const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
    let theme =
      background != null &&
      background.value != null &&
      background.value === "#161C2D"
        ? dark
        : light;

    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Story />
      </ThemeProvider>
    );
  },
];
