import React from 'react'

import { Button, Container, Row, Col, Badge } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBolt, faChartBar, faVideo, faChalkboardTeacher, faUsers, faBan } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faSlack } from '@fortawesome/free-brands-svg-icons'

import Header from '../components/Header'
import RandomQueue from '../components/RandomQueue'

export default () => (
  <>
    <Header />
    <Container fluid className="bg-dark py-3">
      <Row>
        <Col md="6">
          <h1 className="text-light">The Illinois Queue</h1>
          <h4 className="text-light">The Queue allows students, instructors, advisors, and more to be productive and utilize their time more effectively.</h4>
          <div className="mt-4">
            <Button color="primary" className="mr-4 mb-4" tag="a" href="https://queue.illinois.edu/q/">Go directly to the Queues @ Illinois ➤</Button>
            <br />
            <Button color="secondary" className="mb-4" tag="a" href="https://go.illinois.edu/new-queue/">Request a queue for your course ➤</Button>
          </div>
        </Col>
        <Col lg="2" className="d-none d-lg-block" />
        <Col lg="4" md="6" className="d-none d-md-block">
          <RandomQueue />
        </Col>
      </Row>
    </Container>
    <Container className="mt-4">
      <Row className="justify-content-center">
        <Col xl="6" lg="8">
          <video className="dummy-video mx-auto mb-4 d-block" controls>
            <source src="https://queue.illinois.edu/hosted/queue-video.mp4" type="video/mp4" />
            <source src="https://queue.illinois.edu/hosted/queue-video.webm" type="video/webm" />
            https://queue.illinois.edu/hosted/queue-video.mp4
          </video>        
        </Col>
      </Row>
      <Row>
        <Col md="6" className="mb-3">
          <h4><FontAwesomeIcon icon={faUsers} size="lg" className="mr-2" fixedWidth />Open Office Hours</h4>
          <p className="mb-4">
            The Queue eliminates the need for hand-raising and trying to keep track of who raised their hand first. If an instructor has overflowing office hours,
            instructors can allow students can let the instructor know where they are within a nearby area, and what they need help with.
          </p>
        </Col>

        <Col md="6" className="mb-3">
          <h4><FontAwesomeIcon icon={faChalkboardTeacher} size="lg" className="mr-2" fixedWidth />Group Formation and Active Learning</h4>
          <p className="mb-4">
            Instructors can use the Queue for group formation and explanation. By grouping students together based on the topic they are having trouble with,
            the instructor doesn&apos;t have to explain the same concept to several students separately. While in class, students can post questions in the queue
            so that instructors can better prepare themselves prior to helping them.
          </p>
        </Col>
        
        <Col md="6" className="mb-3">
          <h4><FontAwesomeIcon icon={faBolt} size="lg" className="mr-2" fixedWidth />Real Time</h4>
          <p className="mb-4">
            Students can monitor their position in a queue without needing to refresh the page. And instructors
            will get notifications whenever someone new joins the queue so they can help students as quickly as possible.
          </p>
        </Col>

        <Col md="6" className="mb-3">
          <h4><FontAwesomeIcon icon={faChartBar} size="lg" className="mr-2" fixedWidth />Powerful Analytics</h4>
          <Badge color="success">Coming soon!</Badge>
          <p className="mb-4">
            Instructors can harness data from their queues to understand how office hours are used,
            how to better schedule their staff, and more.
          </p>
        </Col>
      </Row>
    </Container>
    <Container fluid className="bg-dark text-white py-4">
      <Container>
        <Row>
          <Col>
            <h3>Open source</h3>
            <p>
              Don&apos;t see the feature you want? The Queue is open-source,
              so anyone can contribute new features or bug fixes. Or, join the
              conversation on the Slack team or GitHub issues to help shape the
              future of the Queue.
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
    <Container>
      <div className="mt-4 text-center">
        <Button color="primary" className="mr-4 mb-4" tag="a" href="https://queue.illinois.edu/q/">Go directly to the Queues @ Illinois ➤</Button>
        <Button color="secondary" className="mb-4" tag="a" href="https://go.illinois.edu/new-queue/">Request a queue for your course ➤</Button>
      </div>
    </Container>
    <Container fluid className="py-4">
      <div className="text-center text-muted">
        <i>Hello from the queue!<br />
        On our spiffy domain name<br />
        "Hi queue!", in haiku</i>
      </div>
    </Container>


    <style jsx>{`
      .dummy-video {
        width: 100%;
        max-width: 780px;
        border: solid 1px black;
      }
    `}</style>
  </>
)
