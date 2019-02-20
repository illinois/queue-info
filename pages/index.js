import React from 'react'

import { Button, Container, Row, Col, Badge } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faBolt, faChartBar, faVideo } from '@fortawesome/free-solid-svg-icons'
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
          <h4 className="text-light">The Queue allows students and instructors to be productive and utilize or time more efficiently.</h4>          
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
      <Row>
        <Col md="4">
          <h4><FontAwesomeIcon icon={faVideo} size="lg" className="mr-2" fixedWidth />1-Minute Overview</h4>
          <video className="dummy-video ml-auto mr-auto mb-4 d-block" controls>
            <source src="https://queue.illinois.edu/hosted/queue-video.mp4" type="video/mp4" />
            <source src="https://queue.illinois.edu/hosted/queue-video.webm" type="video/webm" />
            https://queue.illinois.edu/hosted/queue-video.mp4
          </video>        
        </Col>

        <Col md="4">
          <h4><FontAwesomeIcon icon={faBolt} size="lg" className="mr-2" fixedWidth />No more lines</h4>
          <p className="mb-4">
            With the Queue, there&apos;s no need to wait in long lines or argue over who should be helped first.
            You can wait and work wherever you are and queue staff will come to you when it&apos;s your turn.
          </p>
        </Col>

        <Col md="4">
          <h4><FontAwesomeIcon icon={faBolt} size="lg" className="mr-2" fixedWidth />Open Office Hours</h4>
          <p className="mb-4">
            The queue eliminates the need for hand-raising and trying to keep track of who raised their hand first.  If an instructor has overflowing office hours,
            instructors can allow students can let the instructor know where they are within a nearby area, and what they need help with.
          </p>
        </Col>

        <Col md="4">
          <h4><FontAwesomeIcon icon={faBolt} size="lg" className="mr-2" fixedWidth />Group Formation and Active Learning</h4>
          <p className="mb-4">
            Instructors can use the queue for group formation and explanation.  By grouping students together based on the topic they are having trouble with,
            the instructor doesn't have to explain the same concept to several students separately.  While in class, students can post questions in the queue
            so that instructors can better prepare themselves prior to helping them.
          </p>
        </Col>
        
        <Col md="4">
          <h4><FontAwesomeIcon icon={faBolt} size="lg" className="mr-2" fixedWidth />Real Time</h4>
          <p className="mb-4">
            You can monitor your position in the queue without needing to refresh the page. And your instructors
            will get notifications whenever someone new joins the queue so they can help you as quickly as possible.
          </p>
        </Col>

        <Col md="4">
          <h4><FontAwesomeIcon icon={faChartBar} size="lg" className="mr-2" fixedWidth />Powerful analytics</h4>
          <Badge color="success">Coming soon!</Badge>
          <p className="mb-4">
            Your staff and users generate a lot of data when the use The Queue.
            Harness that data to understand how your queues are used, how to
            better schedule your staff, and more.
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
