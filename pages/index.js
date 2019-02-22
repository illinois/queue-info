import React from 'react'

import { Button, Container, Row, Col, Badge } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBolt, faChartBar, faChalkboardTeacher, faUsers } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faSlack } from '@fortawesome/free-brands-svg-icons'

import RandomQueue from '../components/RandomQueue'

export default () => (
  <>
    <Container fluid className="bg-dark py-3">
      <Row className="justify-content-center">
        <Col sm="10" md="8" lg="6" className="d-flex flex-column justify-content-center py-3 py-md-5 py-lg-0 hero-text-column">
          <h1 className="text-light mb-4">Queue@Illinois</h1>
          <h4 className="text-light mb-4">The Queue allows students, instructors, advisors, and more to be productive and utilize their time more effectively.</h4>
          <div>
            <Button color="primary" className="m-2 ml-lg-0" tag="a" href="https://queue.illinois.edu/q/">Go to the Queue</Button>
            <Button color="secondary" className="m-2" tag="a" href="https://go.illinois.edu/new-queue/">Request a queue</Button>
          </div>
        </Col>
        <Col xl="1" className="d-none d-xl-block" />
        <Col md="6" xl="5" className="d-none d-lg-block">
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
            <h3>Open Source</h3>
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
    <Container className="mt-5">
      <Row>
        <Col md="6">
          <h3 className="bottom-cta-header">Ready to get started?</h3>
          <p className="bottom-cta-copy">Sign in or request a queue for your course.</p>
        </Col>
        <Col md="6" className="d-flex align-items-center justify-content-md-end flex-wrap">
          <Button color="primary" className="mr-4 my-2 m-md-2" tag="a" href="https://queue.illinois.edu/q/">Go to the Queue</Button>
          <Button color="secondary" className="my-2 m-md-2" tag="a" href="https://go.illinois.edu/new-queue/">Request a queue</Button>
        </Col>
      </Row>
      <div className="mt-4 text-center">
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
      :global(.hero-text-column) {
        text-align: center;
      }
      @media (min-width: 992px) {
        :global(.hero-text-column) {
          text-align: start;
        }
      }
      .dummy-video {
        width: 100%;
        max-width: 780px;
        box-shadow: 0 13px 27px -5px rgba(50,50,93,.25), 0 8px 16px -8px rgba(0,0,0,.3);
      }
      .bottom-cta-header {
        font-weight: 300;
        font-size: 2.5rem;
      }
      .bottom-cta-copy {
        font-weight: 300;
        font-size: 1.5rem;
      }
    `}</style>
  </>
)
