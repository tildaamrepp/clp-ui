import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";

import { Typography, Box, Tab, Tabs, Grid, Button } from "@material-ui/core";
import PropTypes from "prop-types";
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  tabsPrimary: {
    background: theme.palette.background.paper,
  },
}));

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`nav-tabpanel-${index}`}
      aria-labelledby={`nav-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `nav-tab-${index}`,
    "aria-controls": `nav-tabpanel-${index}`,
  };
}

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

const MuTabs = (props) => {
  const { openDrawer } = props;
  const [value, setValue] = React.useState(0);
  const classes = useStyles();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  console.log(openDrawer);
  return (
    <Tabs
      color="primary.main"
      variant="standard"
      value={value}
      onChange={handleChange}
      aria-label="nav tabs example"
      className={classes.tabsPrimary}
      centered
    >
      <LinkTab label="Bolag" href="/" {...a11yProps(0)} />
      <LinkTab label="Avdelningar" href="/" {...a11yProps(1)} />
      <LinkTab label="Användare" href="/" {...a11yProps(2)} />
    </Tabs>
  );
};

export default MuTabs;
