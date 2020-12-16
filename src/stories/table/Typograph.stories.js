import React from "react";
import { storiesOf } from "@storybook/react";

import { Container } from "../Helper.stories";

const Table = () => {
  return (
    <Container title="Typograph - Poppins">
      <table className="table">
        <thead>
          <tr>
            <th>Bolag</th>
            <th>Namn</th>
            <th>E-post</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Företag</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
};

const storyFunction = () => {
  return (
    <React.Fragment>
      <Table />
    </React.Fragment>
  );
};
storiesOf("UI Components", module).add("Table", storyFunction, {});
