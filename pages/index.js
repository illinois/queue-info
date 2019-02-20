import React from 'react'

import { Button, Container, Row, Col, Badge } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faBolt, faChartBar, faVideo } from '@fortawesome/free-solid-svg-icons'

import Header from '../components/Header'
import RandomQueue from '../components/RandomQueue'

export default () => (
  <>
    <Header />
    <Container fluid className="bg-dark hero">
      <Row>
        <Col md="6">
          <h1 className="text-light">Illinois Open Source Queue</h1>
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
      <div className="row">
        <div className="col-md-4">
          <h4><FontAwesomeIcon icon={faVideo} size="lg" className="mr-2" fixedWidth />1-Minute Overview</h4>
          <video className="dummy-video ml-auto mr-auto mb-4 d-block" controls>
            <source src="https://queue.illinois.edu/hosted/queue-video.mp4" type="video/mp4" />
            <source src="https://queue.illinois.edu/hosted/queue-video.webm" type="video/webm" />
            https://queue.illinois.edu/hosted/queue-video.mp4
          </video>
        </div>

        <div className="col-md-4">
          <h4><FontAwesomeIcon icon={faBolt} size="lg" className="mr-2" fixedWidth />Open Office Hours</h4>
          <p className="mb-4">
            The queue eliminates the need for hand-raising and trying to keep track of who raised their hand first.  If an instructor has overflowing office hours,
            instructors can allow students can let the instructor know where they are within a nearby area, and what they need help with.
          </p>
        </div>

        <div className="col-md-4">
          <h4><FontAwesomeIcon icon={faBolt} size="lg" className="mr-2" fixedWidth />Group Formation and Active Learning</h4>
          <p className="mb-4">
            Instructors can use the queue for group formation and explanation.  By grouping students together based on the topic they are having trouble with,
            the instructor doesn't have to explain the same concept to several students separately.  While in class, students can post questions in the queue
            so that instructors can better prepare themselves prior to helping them.
          </p>
        </div>

        <div className="col-md-4">
          <h4><FontAwesomeIcon icon={faBolt} size="lg" className="mr-2" fixedWidth />Real-time</h4>
          <p className="mb-4">
            Everyone using a queue will see changes to the queue as they happen without the need to refresh the page.
          </p>
        </div>


        <div className="col-md-4">
          <h4><FontAwesomeIcon icon={faCode} size="lg" className="mr-2" fixedWidth />Open source</h4>
          <p className="mb-4">
            Don't see the feature you want? The Queue is open
            source, so you can contribute new features or bug fixes. Or, join the
            conversation on the Slack team or GitHub issues to help shape the
            future of The Queue.
          </p>
        </div>

        <div className="col-md-4">
          <h4><FontAwesomeIcon icon={faChartBar} size="lg" className="mr-2" fixedWidth />Powerful analytics</h4>
          <Badge color="success">Coming soon!</Badge>
          <p className="mb-4">
            Your staff and users generate a lot of data when the use The Queue.
            Harness that data to understand how your queues are used, how to
            better schedule your staff, and more.
          </p>
        </div>

      </div>
    </Container>
    <Container fluid className="bg-dark hero">
      <div className="mt-4 text-center">
        <Button color="primary" className="mr-4 mb-4" tag="a" href="https://queue.illinois.edu/q/">Go directly to the Queues @ Illinois ➤</Button>
        <Button color="secondary" className="mb-4" tag="a" href="https://go.illinois.edu/new-queue/">Request a queue for your course ➤</Button>
      </div>
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
        border: solid 1px black;
      }
    `}</style>
  </>
)
