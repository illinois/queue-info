import React from "react";
import { Container as ReactstrapContainer, Col, Row } from "reactstrap";

const Container = ({ children, ...rest }) => (
  <ReactstrapContainer {...rest}>
    <Col lg={9} className="mx-auto">
      {children}
    </Col>
  </ReactstrapContainer>
);

export default Container;
