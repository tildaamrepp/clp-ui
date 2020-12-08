import React from "react";
import { storiesOf } from "@storybook/react";
import { Card } from "react-bootstrap";

import { Container } from "../Helper.stories";

const BasicCards = () => {
  return (
    <Container title="Basic Cards">
      <Card className="shadow-sm">
        <Card.Body>This is some text within a card body.</Card.Body>
      </Card>
    </Container>
  );
};

const storyFunction = () => {
  return (
    <React.Fragment>
      <BasicCards />
    </React.Fragment>
  );
};
storiesOf("UI Components", module).add("Cards", storyFunction, {});
