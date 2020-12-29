import { createMuiTheme } from "@material-ui/core/styles";
import cyan from "./colors/cyan";
import green from "./colors/green";
import blue from "./colors/blue";
import imageFile from "../stories/assets/Cloudplanning-inverterad.png";
const image = {
  src: imageFile,
  alt: "clp-logo",
};
const theme = createMuiTheme({
  logo: image,
  palette: {
    type: "dark",
    primary: cyan,
    secondary: green,
    warning: green,
    background: {
      default: "#161C2D",
      paper: "#2E3547",
    },
  },
  typography: {
    fontFamily: ["Poppins", "sans-serif"].join(","),
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
        backgroundColor: blue[900],
        "& .MuiTabs-root": {
          backgroundColor: blue[700],
        },
      },
    },
  },
});
export default theme;
