import React from 'react'
import FlipMove from 'react-flip-move'
import { ListGroup } from 'reactstrap'

import Question from './Question'

const STAFF = [
  'Nathan Walters',
  'Genna Helsel',
  'Jordi Paris Ferrer',
  'Wade Fagen',
]

const STUDENTS = [
  'Bill Gates',
  'Taylor Swift',
  'Lebron James',
  'Sheryl Sandberg',
  'Karlie Kloss',
  'Elon Musk',
  'Grace Hopper',
  'Steve Jobs',
  'Emma Watson',
  'Albert Einstein',
]

const TOPICS = [
  'EMERGENCY????',
  'MP3 reverse is segfaulting at line 420',
  'Houston, we have a problem',
  ':ultrafastparrot:',
]

const LOCATIONS = [
  'siebel basement',
  'on a balcony in summer air',
  '0224',
]

const selectRandomElement = (arr) => {
  const index = Math.floor(Math.random() * arr.length)
  return arr[index]
}

const pickRandomElement = (arr) => {
  const index = Math.floor(Math.random() * arr.length)
  return arr.splice(index, 1)[0]
}

const addRandomQuestion = (state) => {
  const name = pickRandomElement(state.availableStudents)
  const topic = pickRandomElement(state.availableTopics)
  const location = selectRandomElement(LOCATIONS)
  const key = state.key++;
  state.questions.push({
    key,
    name,
    topic,
    location,
  })
}

const addDeterministicQuestion = (state) => {
  const [name] = state.availableStudents.splice(0, 1)
  const [topic] = state.availableTopics.splice(0, 1)
  const key = state.key++;
  state.questions.push({
    key,
    name,
    topic,
    location: 'testing',
  })
}

class RandomQueue extends React.Component {
  constructor(props) {
    super(props)
    this.state =  {
      availableStudents: [...STUDENTS],
      availableStaff: [...STAFF],
      availableTopics: [...TOPICS],
      questions: [],
      key: 0,
    }
    
    // Populate initial state with three questions
    // We use a deterministic selection here to avoid a mismatch between
    // rendering on the server and on the client
    for (let i = 0; i < 3; i++) {
      addDeterministicQuestion(this.state)
      this.state.questions[i].location = LOCATIONS[i]
    }
    // Mark first question as being answered
    this.state.questions[0].beingAnsweredBy = this.state.availableStaff.splice(0, 1)[0]
  }

  advanceState() {
    const newState = {
      questions: [...this.state.questions],
      availableStudents: [...this.state.availableStudents],
      availableStaff: [...this.state.availableStaff],
      availableTopics: [...this.state.availableTopics],
      key: this.state.key,
    }

    // From the first question, send the entities back to the available pools
    const q = newState.questions[0];
    newState.availableStudents.push(q.name)
    newState.availableStaff.push(q.beingAnsweredBy)
    newState.availableTopics.push(q.topic)

    // Remove first question
    newState.questions.splice(0, 1)

    // Add a new question
    addRandomQuestion(newState)

    // Mark first question as being answered
    newState.questions[0].beingAnsweredBy = pickRandomElement(newState.availableStaff)

    // Finally, update state
    this.setState(newState)
  }

  componentDidMount() {
    this.interval = setInterval(() => this.advanceState(), 5000)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  render() {
    const questions = this.state.questions.map((question) => <Question {...question} />)
    return (
      <ListGroup>
        <FlipMove
          enterAnimation="elevator"
          leaveAnimation="elevator"
          duration={200}
        >
          {questions}
        </FlipMove>
      </ListGroup>
    )
  }
}

export default RandomQueue
