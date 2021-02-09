import { createMuiTheme } from "@material-ui/core/styles";
import cyan from "./colors/cyan";
import green from "./colors/green";
import blue from "./colors/blue";
import imageFile from "../stories/assets/Cloudplanning.svg";
import { grey, yellow } from "@material-ui/core/colors";
import { svSE } from "@material-ui/core/locale";
const image = {
  src: imageFile,
  alt: "clp-logo",
};
const defaultTheme = createMuiTheme();

const theme = createMuiTheme(
  {
    logo: image,
    palette: {
      type: "light",
      primary: cyan,
      secondary: green,
      warning: yellow,
      background: {
        default: "#E5E5E5",
        paper: "#ffffff",
      },
    },
    typography: {
      fontFamily: ["Poppins", "sans-serif"].join(","),
    },
    appBar: {
      color: green,
    },

    tabs: {
      backgroundColor: blue[700],
    },
    root: {
      "& .MuiDataGrid-columnSeparator": {
        backgroundColor: "rgba(255, 7, 0, 0.55)",
      },
    },
    overrides: {
      MuiDataGrid: {
        root: {
          fontWeight: "500",
          "& .MuiDataGrid-columnSeparator": {
            display: "none",
          },
          "& .MuiDataGrid-colCellTitle": {
            color: grey[600],
          },
        },
      },

      MuiTab: {
        root: {
          textTransform: "none",
          [defaultTheme.breakpoints.up("md")]: {
            minWidth: "115px",
          },
        },
      },
      MuiAppBar: {
        colorPrimary: {
          backgroundColor: blue[700],
        },
      },
      MuiDrawer: {
        root: {
          color: cyan[500],
          "& .MuiListItem-button": {
            color: grey[700],
          },
          "& .MuiTypography-caption": {
            color: grey[500],
          },
        },
      },
      MuiListItem: {
        root: {
          "&$selected, &$selected:hover": {
            backgroundColor: cyan[100],
            color: cyan[500],
            "&$svg": {
              backgroundColor: cyan[100],
              color: cyan[500],
            },
          },
          "&$selected:hover": {
            backgroundColor: cyan[100],
            color: cyan[500],
          },
          "&:hover": {
            backgroundColor: "white",
            color: cyan[500],
          },
        },
      },
      MuiTypography: {
        h1: {
          fontSize: "2.5rem",
          fontWeight: "400",
        },
        h2: {
          fontSize: "2rem",
          fontWeight: "400",
        },
        h3: {
          fontSize: "1.75rem",
        },
        h4: {
          fontSize: "1.50rem",
        },
        h5: {
          fontSize: "1.25rem",
        },
      },
    },
  },
  svSE
);
export default theme;
