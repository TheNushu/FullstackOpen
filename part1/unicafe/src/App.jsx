import { useState } from 'react'

const Display = (props) => {
  return (
    <div>{props.counter}</div>
  )
}

const History = (props) => {
  if (props.allClicks.length === 0) {
    return (
      <div>
        the app is used by pressing the buttons
      </div>
    )
  }
  return (
    <div>
      button press history: {props.allClicks.join(' ')}
    </div>
  )
}

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)



  const setToValue = (newValue, setValueFunction) => {
    console.log('value now', newValue) 
    setValueFunction(newValue)
  }

  // Do not define components inside another component

  const Display = props => <div>{props.value}</div>

  return (
    <div>
      <h3>Give feedback</h3>
      <Button handleClick={() => setToValue(good + 1, setGood)} text="good" />
      <Button handleClick={() => setToValue(neutral + 1, setNeutral)} text="neutral" />
      <Button handleClick={() => setToValue(bad + 1, setBad)} text="bad" />
      
      <h3>Statistics</h3>
      
      <ul>
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
      </ul>
      
    </div>
  )
}

export default App
