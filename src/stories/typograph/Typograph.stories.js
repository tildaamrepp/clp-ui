import React from "react";
import { storiesOf } from "@storybook/react";

import { Container } from "../Helper.stories";
import { Typography } from "@material-ui/core";

const BasicCards = () => {
  return (
    <Container title="Typograph - Poppins">
      <hr />
      <Typography variant="h1">Heading 1</Typography>
      <Typography variant="h2">Heading 2</Typography>
      <Typography variant="h3">Heading 3</Typography>
      <Typography variant="h4">Heading 4</Typography>
      <Typography variant="h5">Heading 5</Typography>
      <Typography variant="h6">Heading 6</Typography>
      <Typography>Bodytext</Typography>
      <Typography variant="body2">Label</Typography>
      <Typography variant="caption">Caption</Typography>
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
