import React from 'react'
import FlipMove from 'react-flip-move'
import { ListGroup } from 'reactstrap'

import Question from './Question'

const STAFF = [
  'Nathan Walters',
  'Genna Helsel',
  'Jordi Paris Ferrer',
  'Wade Fagen-Ulmschneider',
  'Jacqueline Osborn',
  'Rittika Adhikari',
  'James Wang',
  'Karin Jensen',
  'Karle Flanagan',
  'Jenny Amos',
  'Lawrence Angrave',
  'Christopher Schmitz',
]

const STUDENTS = [
  'Bill Gates',
  'Taylor Swift',
  'Lebron James',
  'Sheryl Sandberg',
  'Karlie Kloss',
  'Elon Musk',
  'Grace Hopper',
  'Emma Watson',
  'Albert Einstein',
]

const TOPICS = [
  'Homework #2, Problem 5: Confused on unit conversation',
  'Clarification on the meaning of r on a scatter plot',
  'I don\'t understand how to read a box plot',
  'Page 147: Why do we multiply by x instead of dividing?',
  'MP7 draw_maze() segfaults when running but never segfaults when using gdb'
]

const LOCATIONS = [
  'red benches in siebel basement',
  '0224 SC',
  'on a balcony in summer air',
  'lincoln hall 1204',
  'FLB G32',
  'BIF coffee shop',
  'alma mater',
  'courtyard cafe'
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

    this.windowFocused = this.windowFocused.bind(this)
    this.windowBlurred = this.windowBlurred.bind(this)

    
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

  windowFocused() {
    if (this.interval) {
      clearInterval(this.interval)
    }
    this.interval = setInterval(() => this.advanceState(), 5000)
  }

  windowBlurred() {
    if (this.interval) {
      clearInterval(this.interval)
    }
  }

  componentDidMount() {
    // This is to avoid having the browser queue up a bunch of changes while
    // the user is on another tab - otherwise N changes will be flushed to
    // the display at the same time when the user comes back to this tab,
    // which temporarily kills perf
    this.interval = setInterval(() => this.advanceState(), 10000)
    window.addEventListener('focus', this.windowFocused)
    window.addEventListener('blur', this.windowBlurred)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
    window.removeEventListener('focus', this.windowFocused)
    window.removeEventListener('blur', this.windowBlurred)
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
