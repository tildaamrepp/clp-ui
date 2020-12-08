import React from "react";
import { storiesOf } from "@storybook/react";

import { Container } from "../Helper.stories";

const BasicCards = () => {
  return (
    <Container title="Typograph - Poppins">
      <hr />
      <h1>Heading 1</h1>
      <h2>Heading 2</h2>
      <h3>Heading 3</h3>
      <h4>Heading 4</h4>
      <p className="lead">Lead</p>
      <p>Bodytext</p>
      <label>Label</label>
      <br />
      <small>Small</small>
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
storiesOf("UI Components", module).add("Typograph", storyFunction, {});
