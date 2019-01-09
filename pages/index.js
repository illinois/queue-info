import React from 'react'

import { Button, Container, ListGroup, Row, Col } from 'reactstrap'

import Header from '../components/Header'
import Question from '../components/Question'

export default () => (
  <>
    <Header />
    <Container fluid className="bg-dark hero">
      <Row>
        <Col lg="6">
          <h1 className="text-light">The future of real-time learning</h1>
          <h6 className="text-light">Illinois Queues help to power office hours, academic advising, lectures, and more.</h6>
        </Col>
        <Col lg="6">
          <ListGroup>
            <Question id={1} name="Nathan Walters" location="Siebel 0224" topic="MP3 reverse is segfaulting at line 420" beingAnsweredBy="Wade Fagen" didUserAskQuestion />
            <Question id={2} name="Genna Helsel" location="Siebel 0224" topic="My fire alarm is going off again" />
            <Question id={3} name="Jordi Paris Ferrer" location="Siebel 0403" topic="EMERGENCY????" />
          </ListGroup>
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
