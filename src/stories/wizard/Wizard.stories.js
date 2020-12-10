import React from "react";
import { storiesOf } from "@storybook/react";
import { Card, CardGroup, Tabs, Tab, Row, Col } from "react-bootstrap";
import {
  BusinessCenterOutlined,
  BusinessOutlined,
  LayersOutlined,
  GroupOutlined,
} from "@material-ui/icons";

import { Container } from "../Helper.stories";

const BasicCards = () => {
  return (
    <Container title="Wizard">
      <Row className="wizard">
        <Col>
          <Card.Body className="shadow-sm rounded-circle h-32 w-32 d-flex align-items-center justify-content-center active">
            <BusinessOutlined fontSize="large" />
          </Card.Body>
        </Col>
        <Col>
          <Card.Body className="shadow-sm rounded-circle h-32 w-32 d-flex align-items-center justify-content-center alert-success">
            <BusinessCenterOutlined fontSize="large" />
          </Card.Body>
        </Col>
        <Col>
          <Card.Body className="shadow-sm rounded-circle h-32 w-32 d-flex align-items-center justify-content-center alert-secondary">
            <LayersOutlined fontSize="large" />
          </Card.Body>
        </Col>
        <Col>
          <Card.Body className="shadow-sm rounded-circle h-32 w-32 d-flex align-items-center justify-content-center alert-secondary">
            <GroupOutlined fontSize="large" />
          </Card.Body>
        </Col>
      </Row>
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
storiesOf("UI Components", module).add("Wizard", storyFunction, {});
