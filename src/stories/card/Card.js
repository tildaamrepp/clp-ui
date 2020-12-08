import React from "react";
import { Card } from "reactstrap";
import PropTypes from "prop-types";

export const BasicCard = ({ backgroundColor, ...props }) => {
  return (
    <Card {...props}>
      <Card.Body>This is some text within a card body.</Card.Body>
    </Card>
  );
};

BasicCard.propTypes = {
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,
};

BasicCard.defaultProps = {
  backgroundColor: null,
};
