import React from 'react'

import { Button, Container, ListGroup, Row, Col } from 'reactstrap'

import Header from '../components/Header'
import Question from '../components/Question'
import RandomQueue from '../components/RandomQueue'

export default () => (
  <>
    <Header />
    <Container fluid className="bg-dark hero">
      <Row>
        <Col lg="6">
          <h1 className="text-light">Illinois Queues help to power office hours, academic advising, lectures, and more.</h1>
        </Col>
        <Col lg="6">
          <RandomQueue />
        </Col>
      </Row>
    </Container>
    <Container>
      <h3>Real-time</h3>
      <p>Everyone using a queue will see changes to the queue as they happen withoug the need to refresh the page.</p>

      <h3>Open source</h3>
      <p>
        Don't see the feature you want? The Illinois Queue software is open
        source, so you can contribute new features or bug fixes. Or, join the
        conversation on the Slack team or GitHub issues to help shape the
        future of the queue.
      </p>
    </Container>
    <style jsx>{`
      .hero {
        padding-top: 100px;
        padding-bottom: 100px;
      }
      .hero-title {
        margin-top: 100px;
        margin-bottom: 40px;
      }
      .hero-button {
        margin-bottom: 100px;
      }
    `}</style>
  </>
)
