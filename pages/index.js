import React from 'react'

import { Button, Container, ListGroup, Row, Col } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faBolt } from '@fortawesome/free-solid-svg-icons'

import Header from '../components/Header'
import RandomQueue from '../components/RandomQueue'

export default () => (
  <>
    <Header />
    <Container fluid className="bg-dark hero">
      <Row>
        <Col md="6">
          <h1 className="text-light">The Queue helps power office hours, academic advising, lectures, and more.</h1>
          <div className="mt-4">
            <Button color="primary" className="mr-4 mb-4" tag="a" href="https://queue.illinois.edu/q/">Go to The Queue</Button>
            <Button color="secondary" className="mb-4" tag="a" href="https://go.illinois.edu/new-queue/">Request a queue for your course</Button>
          </div>
        </Col>
        <Col lg="2" className="d-none d-lg-block" />
        <Col lg="4" md="6" className="d-none d-md-block">
          <RandomQueue />
        </Col>
      </Row>
    </Container>
    <Container className="mt-4">
      <img src="https://via.placeholder.com/780x438?text=Video+goes+here" className="dummy-video ml-auto mr-auto mb-4 d-block" />
      <h3><FontAwesomeIcon icon={faBolt} size="lg" className="mr-2" fixedWidth />Real-time</h3>
      <p>Everyone using a queue will see changes to the queue as they happen withoug the need to refresh the page.</p>

      <h3><FontAwesomeIcon icon={faCode} size="lg" className="mr-2" fixedWidth />Open source</h3>
      <p>
        Don't see the feature you want? The Illinois Queue software is open
        source, so you can contribute new features or bug fixes. Or, join the
        conversation on the Slack team or GitHub issues to help shape the
        future of the queue.
      </p>
    </Container>
    <style jsx>{`
      .hero {
        padding-top: 1rem;
        padding-bottom: 1rem;
      }
      .hero-button {
        margin-bottom: 100px;
      }
      .dummy-video {
        width: 100%;
        max-width: 780px;
      }
    `}</style>
  </>
)
