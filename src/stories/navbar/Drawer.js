import React from "react";

import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import {
  faBuilding,
  faBus,
  faCog,
  faLeafHeart,
  faUsersCog,
} from "@fortawesome/pro-light-svg-icons";
import {
  Drawer,
  List,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
  Collapse,
  Typography,
} from "@material-ui/core";
import MailIcon from "@material-ui/icons/Mail";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ExpandLess from "@material-ui/icons/ExpandLess";

import ExpandMore from "@material-ui/icons/ExpandMore";
const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: "nowrap",
    },
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1,
    },
    "& .MuiListItem-button": {
      padding: theme.spacing(1, 3),
    },
  },

  list: {
    padding: theme.spacing(1, 2),
  },
  nested: {
    padding: theme.spacing(0.5, 3),
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: theme.spacing(0, 0.5, 0, 2),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
}));

const MuDrawer = (props) => {
  const { openDrawer, handleDrawerChange } = props;

  const classes = useStyles();

  const [openList, setOpenList] = React.useState(false);
  const theme = useTheme();
  const handleClick = () => {
    setOpenList(!openList);
  };
  return (
    <BrowserRouter>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: openDrawer,
          [classes.drawerClose]: !openDrawer,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: openDrawer,
            [classes.drawerClose]: !openDrawer,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <img src={theme.logo.src} alt={theme.logo.alt} width="150" />
          <IconButton onClick={() => handleDrawerChange()}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List disablePadding>
          <ListItem button onClick={handleClick} className={classes.list}>
            <ListItemIcon>
              <FontAwesomeIcon icon={faBus} size="lg" />
            </ListItemIcon>
            <ListItemText primary="Körning" />
            {openList ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={openList} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button className={classes.nested}>
                <ListItemIcon>
                  <FontAwesomeIcon icon={faLeafHeart} size="lg" />
                </ListItemIcon>
                <ListItemText primary="Sparsam körning" />
              </ListItem>
            </List>
          </Collapse>
          {["Kunder"].map((text, index) => (
            <ListItem
              button
              key={text}
              className={clsx(classes.list, "Mui-selected")}
              to="/"
              component={NavLink}
            >
              <ListItemIcon>
                {index % 2 === 0 ? (
                  <FontAwesomeIcon icon={faBuilding} size="lg" />
                ) : (
                  <MailIcon />
                )}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List disablePadding>
          <ListItem>
            <Typography variant="caption">Admin</Typography>
          </ListItem>
          {["Användare", "Inställningar"].map((text, index) => (
            <ListItem button key={text} className={classes.list}>
              <ListItemIcon>
                {index % 2 === 0 ? (
                  <FontAwesomeIcon icon={faUsersCog} size="lg" />
                ) : (
                  <FontAwesomeIcon icon={faCog} size="lg" />
                )}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </BrowserRouter>
  );
};

export default MuDrawer;
