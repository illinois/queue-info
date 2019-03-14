import React from 'react'
import { Container as ReactstrapContainer, Col, Row } from 'reactstrap'

const Container = ({ children, ...rest }) => (
  <ReactstrapContainer {...rest}>
    <Row>
      <Col lg={9} className="mx-auto">
        {children}
      </Col>
    </Row>
  </ReactstrapContainer>
)

export default Container
