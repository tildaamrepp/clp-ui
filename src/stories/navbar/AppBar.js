import React from "react";

import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/pro-light-svg-icons";
import {
  AppBar,
  Toolbar,
  Typography,
  Breadcrumbs,
  Link,
  IconButton,
  Menu,
  MenuItem,
  Box,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import MuTabs from "./Tabs";
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  mainToolbar: {
    justifyContent: "space-between",
    display: "flex",
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  tabsShift: {
    // marginLeft: drawerWidth,
    marginLeft: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1,
    },
  },
  justifyTabsContentEnd: {
    "& .MuiTabs-flexContainer": {
      justifyContent: "flex-end",
    },
  },
  justifyContentEnd: {
    justifyContent: "flex-end",
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: "none",
  },
  center: {
    display: "flex",
    alignItems: "center",
  },
}));

const MuAppBar = (props) => {
  const { openDrawer, handleDrawerChange } = props;
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const openDropdown = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar
      position="fixed"
      color="primary"
      className={clsx(classes.appBar, {
        [classes.appBarShift]: openDrawer,
      })}
    >
      <Toolbar
        className={clsx(classes.mainToolbar, {
          [classes.justifyContentEnd]: openDrawer,
        })}
      >
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={() => handleDrawerChange()}
          //   onClick={handleDrawerOpen}
          edge="start"
          className={clsx(classes.menuButton, {
            [classes.hide]: openDrawer,
          })}
        >
          <MenuIcon />
        </IconButton>

        <div>
          <IconButton
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
            color="inherit"
          >
            <Box m={0.8}>
              <Typography variant="body2">Tilda Amré</Typography>
            </Box>
            <FontAwesomeIcon icon={faUser} size="xs" />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={openDropdown}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Min sida</MenuItem>
            <MenuItem onClick={handleClose}>Logga ut</MenuItem>
          </Menu>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default MuAppBar;
