import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { ListGroupItem, Button, Badge } from 'reactstrap'

/* eslint-disable react/prefer-stateless-function */
class Question extends React.Component {
  render() {
    const {
      id,
      name,
      location,
      topic,
      beingAnsweredBy,
      didUserAskQuestion,
    } = this.props

    const isBeingAnswered = !!beingAnsweredBy
    const answeringName = isBeingAnswered && beingAnsweredBy

    return (
      <Fragment>
        <ListGroupItem key={id} className="d-sm-flex align-items-center">
          <div
            style={{
              height: '100%',
              position: 'absolute',
              top: '0',
              left: '0',
            }}
          >
            {didUserAskQuestion && (
              <div
                style={{
                  height: '100%',
                  width: '5px',
                  float: 'left',
                }}
                className="bg-primary"
              />
            )}
            {isBeingAnswered && (
              <div
                style={{
                  height: '100%',
                  width: '5px',
                  float: 'left',
                }}
                className="bg-success"
              />
            )}
          </div>
          <div>
            {isBeingAnswered && (
              <Badge color="success">Being answered by {answeringName}</Badge>
            )}
            <strong className="d-block">
              <span title="Name">{name}</span>
            </strong>
            <div className="text-muted">
              <span className="text-muted" style={{ fontSize: '0.9rem' }}>
                <span title="Location">{location}</span>
              </span>
            </div>
            <div title="Topic">{topic}</div>
          </div>
        </ListGroupItem>
      </Fragment>
    )
  }
}

Question.defaultProps = {
  answeringBy: null,
  didUserAskQuestion: false,
}

Question.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  topic: PropTypes.string.isRequired,
  beingAnsweredBy: PropTypes.string,
  didUserAskQuestion: PropTypes.bool,
}

export default Question
