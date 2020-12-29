import React from "react";
import { storiesOf } from "@storybook/react";

import { makeStyles } from "@material-ui/core/styles";
import {
  Typography,
  Grid,
  Link,
  Breadcrumbs,
  Box,
  Button,
} from "@material-ui/core";
import MuAppBar from "./navbar/AppBar";
import MuDrawer from "./navbar/Drawer";
import MuTabs from "./navbar/Tabs";

import { DataGrid } from "@material-ui/data-grid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/pro-light-svg-icons";

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
    padding: theme.spacing(5, 3),
    margin: theme.spacing(0, 3),
    // maxWidth: 500,
    background: theme.palette.background.paper,
    borderRadius: "0.5rem",
  },
  breadcrumbs: {
    padding: theme.spacing(1, 3),
    background: theme.palette.background.paper,
  },
}));

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "firstName", headerName: "First name", width: 130 },
  { field: "lastName", headerName: "Last name", width: 130 },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 90,
  },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.getValue("firstName") || ""} ${
        params.getValue("lastName") || ""
      }`,
  },
];

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
];

const MuTable = () => {
  return (
    <div>
      <Box container justify="flex-end" mb={1}>
        <Button
          variant="contained"
          color="primary"
          startIcon={<FontAwesomeIcon icon={faPlus} />}
        >
          Lägg till
        </Button>
      </Box>
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          checkboxSelection
          search={true}
        />
      </div>
    </div>
  );
};

const Headers = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const toggleDrawer = () => setOpen(!open);
  return (
    <div className={classes.root}>
      <MuAppBar openDrawer={open} handleDrawerChange={toggleDrawer} />

      <MuDrawer handleDrawerChange={toggleDrawer} openDrawer={open} />

      <main className={classes.content}>
        <Breadcrumbs
          aria-label="breadcrumb"
          className={classes.breadcrumbs}
          separator="-"
          variant="caption"
        >
          <Link color="textSecondary" href="/">
            Kunder
          </Link>
          <Typography color="textPrimary" variant="caption">
            Bolag
          </Typography>
        </Breadcrumbs>
        <MuTabs openDrawer={open} />
        <div className={classes.toolbar}></div>
        <Grid container spacing={3}>
          <Grid item xs={12} py={3} className={classes.paper}>
            <MuTable />
          </Grid>
        </Grid>
      </main>
    </div>
  );
};

const storyFunction = () => {
  return (
    <React.Fragment>
      <Headers />
    </React.Fragment>
  );
};
storiesOf("Pages", module).add("Kunder", storyFunction, {});
