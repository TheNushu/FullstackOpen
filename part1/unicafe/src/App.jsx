import { useState } from 'react'

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const StatisticLine = (props) => {
  const {text, value, extra} = props
  return (
    <p>{text} {value}{extra}</p>
  )
}

const Statistics = (props) => {
  const { good, neutral, bad } = props

  const countOfValues = good + bad + neutral
  const avg = (good - bad) / countOfValues
  const positive = (good / countOfValues) * 100

  if (countOfValues === 0) {
    return <StatisticLine text="No feedback given" />
  }
  
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td><StatisticLine text="Good: " value={good} /></td>
          </tr>
          <tr>
            <td><StatisticLine text="Neutral: " value={neutral} /></td>
          </tr>
          <tr>
            <td><StatisticLine text="Bad: " value={bad} /></td>
          </tr>
          <tr>
            <td><StatisticLine text="All: " value={countOfValues} /></td>
          </tr>
          <tr>
            <td><StatisticLine text="Average: " value={avg} /></td>
          </tr>
          <tr>
            <td><StatisticLine text="Positive: " value={positive} extra="%" /></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}


const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const setToValue = (newValue, setValueFunction) => {
    console.log('value now', newValue) 
    setValueFunction(newValue)
  }

  return (
    <div>
      <h3>Give feedback</h3>
      <Button handleClick={() => setToValue(good + 1, setGood)} text="good" />
      <Button handleClick={() => setToValue(neutral + 1, setNeutral)} text="neutral" />
      <Button handleClick={() => setToValue(bad + 1, setBad)} text="bad" />
      
      <h3>Statistics</h3>      
      <Statistics good={good} neutral={neutral} bad={bad}/>
      
    </div>
  )
}

export default App
