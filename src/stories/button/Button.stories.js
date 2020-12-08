import React from "react";
import { storiesOf } from "@storybook/react";
import { Button, ButtonGroup } from "react-bootstrap";
import { Container } from "../Helper.stories";

const BasicButtons = () => {
  return (
    <Container title="Basic Buttons">
      <Button variant="primary">primary</Button>{" "}
      <Button variant="secondary">secondary</Button>{" "}
      <Button variant="success">success</Button>{" "}
      <Button variant="info">info</Button>{" "}
      <Button variant="warning">warning</Button>{" "}
      <Button variant="danger">danger</Button>{" "}
      <Button variant="light">Light</Button>{" "}
      <Button variant="dark">Dark</Button>
      <Button variant="link">link</Button>
    </Container>
  );
};
const OutlineButtons = () => {
  return (
    <Container title="Outline Buttons">
      <Button variant="outline-primary">primary</Button>{" "}
      <Button variant="outline-secondary">secondary</Button>{" "}
      <Button variant="outline-success">success</Button>{" "}
      <Button variant="outline-info">info</Button>{" "}
      <Button variant="outline-warning">warning</Button>{" "}
      <Button variant="outline-danger">danger</Button>
    </Container>
  );
};

const ButtonSizes = () => {
  return (
    <Container>
      <div style={{ width: "50%", float: "left" }}>
        <h3>Large Buttons</h3>
        <ButtonGroup size="lg">
          <Button variant="primary">Left</Button>
          <Button variant="secondary">Middle</Button>
          <Button variant="danger">Right</Button>
        </ButtonGroup>
      </div>
      <div style={{ width: "50%", float: "left" }}>
        <h3>Small Buttons </h3>
        <ButtonGroup size="sm">
          <Button variant="primary">Left</Button>
          <Button variant="secondary">Middle</Button>
          <Button variant="danger">Right</Button>
        </ButtonGroup>
      </div>
    </Container>
  );
};

const ButtonGroups = () => {
  return (
    <Container>
      <div style={{ width: "50%", float: "left" }}>
        <h3>Horizontal Button Groups</h3>
        <ButtonGroup>
          <Button variant="primary">Left</Button>
          <Button variant="secondary">Middle</Button>
          <Button variant="danger">Right</Button>
        </ButtonGroup>
      </div>
      <div style={{ width: "50%", float: "left" }}>
        <h3>Vertical Button Groups</h3>
        <ButtonGroup vertical>
          <Button variant="primary">Left</Button>
          <Button variant="secondary">Middle</Button>
          <Button variant="danger">Right</Button>
        </ButtonGroup>
      </div>
    </Container>
  );
};

const storyFunction = () => {
  return (
    <React.Fragment>
      <BasicButtons />
      <ButtonSizes />
      <OutlineButtons />
      <ButtonGroups />
    </React.Fragment>
  );
};
storiesOf("UI Components", module).add("Buttons", storyFunction, {});
