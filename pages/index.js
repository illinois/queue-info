import React from 'react'

import { Button, Container, Row, Col, Badge } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faBolt, faChartBar } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faSlack } from '@fortawesome/free-brands-svg-icons'

import Header from '../components/Header'
import RandomQueue from '../components/RandomQueue'

export default () => (
  <>
    <Header />
    <Container fluid className="bg-dark py-3">
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
      <h3>No more lines</h3>
      <p className="mb-4">
        With the Queue, there&apos;s no need to wait in long lines or argue over who should be helped first.
        You can wait and work wherever you are and queue staff will come to you when it&apos;s your turn.
      </p>

      <h3>Real-time</h3>
      <p className="mb-4">
        You can monitor your position in the queue without needing to refresh the page. And your instructors
        will get notifications whenever someone new joins the queue so they can help you as quickly as possible.
      </p>

      <h3>Powerful analytics</h3>
      <Badge color="success">Coming soon!</Badge>
      <p className="mb-4">
        Staff will soon be able to use the data generated from The Queue to better understand how students use
        their queues, how to better schedule their staff, and more.
      </p>
    </Container>
    <Container fluid className="bg-dark text-white py-4">
      <Container>
        <Row >
          <Col>
            <h3>Open source</h3>
            <p>
              Don&apos;t see the feature you want? The Queue is open-source,
              so you can contribute new features or bug fixes. Or, join the
              conversation on the Slack team or GitHub issues to help shape the
              future of The Queue.
            </p>
            <Button color="light" className="mr-3" tag="a" href="https://github.com/illinois/queue">
              <FontAwesomeIcon icon={faGithub} size="lg" className="mr-2" fixedWidth />
              GitHub
            </Button>
            <Button color="light" className="mr-4" tag="a" href="https://illinois-oss.slack.com/">
              <FontAwesomeIcon icon={faSlack} size="lg" className="mr-2" fixedWidth />
              Slack
            </Button>
          </Col>
        </Row>
      </Container>
    </Container>
    <style jsx>{`
      .dummy-video {
        width: 100%;
        max-width: 780px;
      }
    `}</style>
  </>
)
