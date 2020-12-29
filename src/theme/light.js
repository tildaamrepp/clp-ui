import { createMuiTheme } from "@material-ui/core/styles";
import cyan from "./colors/cyan";
import green from "./colors/green";
import blue from "./colors/blue";
import imageFile from "../stories/assets/Cloudplanning.svg";
const image = {
  src: imageFile,
  alt: "clp-logo",
};
const theme = createMuiTheme({
  logo: image,
  palette: {
    type: "light",
    primary: cyan,
    secondary: green,
    warning: green,
    background: {
      default: "#E5E5E5",
      paper: "#ffffff",
    },
  },
  appBar: {
    color: green,
  },

  typography: {
    fontFamily: ["Poppins", "sans-serif"].join(","),
  },
  tabs: {
    backgroundColor: blue[700],
  },
  overrides: {
    MuiButton: {
      root: {
        textTransform: "none",
        fontWeight: "400",
        borderRadius: "0.6rem",
      },
    },
    MuiAppBar: {
      colorPrimary: {
        backgroundColor: blue[700],
      },
    },
  },
});
export default theme;
