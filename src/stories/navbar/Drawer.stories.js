import React from "react";
import { storiesOf } from "@storybook/react";

import { makeStyles } from "@material-ui/core/styles";
import {
  Typography,
  Grid,
  Paper,
  Button,
  Breadcrumbs,
  Link,
} from "@material-ui/core";
import MuDrawer from "./Drawer";
import MuAppBar from "./AppBar";
import MuTabs from "./Tabs";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  grow: {
    flexGrow: 1,
  },

  mainToolbar: {
    justifyContent: "space-between",
    display: "flex",
  },

  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: "none",
  },

  nested: {
    padding: theme.spacing(0.5, 3),
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: theme.spacing(0, 3),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(8, 0),
    background: theme.palette.background.default,
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: 500,
  },
  breadcrumbs: {
    padding: theme.spacing(1, 3),
    justifyContent: "center",
    display: "flex",
    background: theme.palette.background.paper,
  },
}));

const MiniDrawer = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const toggleDrawer = () => setOpen(!open);
  return (
    <div className={classes.root}>
      <MuAppBar openDrawer={open} handleDrawerChange={toggleDrawer} />
      {/* <MuTabs openDrawer={open} /> */}
      {/* <MuDrawer /> */}
      <MuDrawer handleDrawerChange={toggleDrawer} openDrawer={open} />
      {/* <Typography variant="h5">Page Title</Typography> */}
      {/* <Breadcrumbs color="inherit" separator="-" aria-label="breadcrumb">
        <Link color="inherit" href="/" variant="caption">
          Översikt
        </Link>
        <Link color="inherit" href="" variant="caption">
          Kunder
        </Link>
        <Typography variant="caption">Bolag</Typography>
      </Breadcrumbs> */}

      <main className={classes.content}>
        <Breadcrumbs
          aria-label="breadcrumb"
          className={classes.breadcrumbs}
          separator="-"
          variant="caption"
        >
          <Link color="textSecondary" href="/">
            Översikt
          </Link>
          <Link color="textSecondary" href="/">
            Kunder
          </Link>
          <Typography color="textPrimary" variant="caption">
            Byberg & Nordin
          </Typography>
        </Breadcrumbs>
        <MuTabs openDrawer={open} />
        <div className={classes.toolbar}></div>
        <Grid container spacing={3}>
          {/* <Grid item xs={12} className={classes.paper}>
            <Paper className={classes.paper}>
              <Typography paragraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Rhoncus dolor purus non enim praesent elementum facilisis leo
                vel. Risus at ultrices mi tempus imperdiet. Semper risus in
                hendrerit gravida rutrum quisque non tellus. Convallis convallis
                tellus id interdum velit laoreet id donec ultrices. Odio morbi
                quis commodo odio aenean sed adipiscing. Amet nisl suscipit
                adipiscing bibendum est ultricies integer quis. Cursus euismod
                quis viverra nibh cras. Metus vulputate eu scelerisque felis
                imperdiet proin fermentum leo. Mauris commodo quis imperdiet
                massa tincidunt. Cras tincidunt lobortis feugiat vivamus at
                augue. At augue eget arcu dictum varius duis at consectetur
                lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa
                sapien faucibus et molestie ac.
              </Typography>
              <Typography paragraph>
                Consequat mauris nunc congue nisi vitae suscipit. Fringilla est
                ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar
                elementum integer enim neque volutpat ac tincidunt. Ornare
                suspendisse sed nisi lacus sed viverra tellus. Purus sit amet
                volutpat consequat mauris. Elementum eu facilisis sed odio
                morbi. Euismod lacinia at quis risus sed vulputate odio. Morbi
                tincidunt ornare massa eget egestas purus viverra accumsan in.
                In hendrerit gravida rutrum quisque non tellus orci ac.
                Pellentesque nec nam aliquam sem et tortor. Habitant morbi
                tristique senectus et. Adipiscing elit duis tristique
                sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
                eleifend. Commodo viverra maecenas accumsan lacus vel facilisis.
                Nulla posuere sollicitudin aliquam ultrices sagittis orci a.
              </Typography>
            </Paper>
          </Grid> */}
        </Grid>
      </main>
    </div>
  );
};

const storyFunction = () => {
  return (
    <React.Fragment>
      <MiniDrawer />
    </React.Fragment>
  );
};
storiesOf("UI Components", module).add("Side navigation", storyFunction, {});
