import React from "react";
import { storiesOf } from "@storybook/react";
// import { Button, ButtonGroup } from "react-bootstrap";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));
const BasicButtons = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {/* <Button variant="primary">primary</Button>{" "}
      <Button variant="secondary">secondary</Button>{" "}
      <Button variant="success">success</Button>{" "}
      <Button variant="info">info</Button>{" "}
      <Button variant="warning">warning</Button>{" "}
      <Button variant="danger">danger</Button>{" "}
      <Button variant="light">Light</Button>{" "}
      <Button variant="dark">Dark</Button>
      <Button variant="link">link</Button> */}
    </div>
  );
};
const OutlineButtons = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Button variant="outlined">Default</Button>
      <Button variant="outlined" color="primary">
        Primary
      </Button>
      <Button variant="outlined" color="secondary">
        Secondary
      </Button>
      <Button variant="outlined" disabled>
        Disabled
      </Button>

      <Button variant="outlined" color="primary" href="#outlined-buttons">
        Link
      </Button>
    </div>
  );
};

const ButtonSizes = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Button variant="contained">Default</Button>
      <Button variant="contained" color="primary">
        Primary
      </Button>
      <Button variant="contained" color="secondary">
        Secondary
      </Button>
      <Button variant="contained" disabled>
        Disabled
      </Button>
      <Button color="primary" href="#contained-buttons">
        Link
      </Button>
      <div style={{ width: "50%", float: "left" }}>
        <h3>Large Buttons</h3>
        <Button
          variant="contained"
          size="large"
          color="primary"
          className={classes.margin}
        >
          Large
        </Button>
      </div>
      <div style={{ width: "50%", float: "left" }}>
        <h3>Small Buttons </h3>
        <Button
          variant="contained"
          size="small"
          color="primary"
          className={classes.margin}
        >
          Small
        </Button>
      </div>
    </div>
  );
};

const storyFunction = () => {
  return (
    <React.Fragment>
      <BasicButtons />
      <ButtonSizes />
      <OutlineButtons />
    </React.Fragment>
  );
};
storiesOf("UI Components", module).add("Buttons", storyFunction, {});
