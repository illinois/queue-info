import React from "react";
import { Container, Row, Col } from "reactstrap";

import PostDate from "./PostDate";
import PostAuthor from "./PostAuthor";

export default meta => ({ children }) => {
  const authors = (meta.authors || []).map((author, idx, authors) => {
    return <PostAuthor {...author} />;
  });
  return (
    <Container className="mt-3">
      <Row className="justify-content-center">
        <Col lg={9}>
          <h1 className="text-center h2">{meta.title}</h1>
          <div className="small text-muted text-center">
            <PostDate date={meta.date} />
          </div>
          <div className="my-3 d-flex flex-wrap justify-content-center">
            {authors}
          </div>
          <hr />
          {children}
        </Col>
      </Row>
    </Container>
  );
};
