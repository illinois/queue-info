import React from "react";
import { Container, Row, Col } from "reactstrap";

export default meta => ({ children }) => {
  return (
    <Container className="mt-3">
      <Row className="justify-content-center">
        <Col lg={9}>
          <h1>{meta.title}</h1>
          {children}
        </Col>
      </Row>
    </Container>
  );
};
