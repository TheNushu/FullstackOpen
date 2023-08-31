import { useState } from 'react'
   
const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)
  const [vote, setVotes] = useState([0, 0, 0, 0, 0, 0, 0, 0])

  const setIndex = () => {
    console.log(Math.max(vote));
    const rand = Math.floor(Math.random() * 8) 
    console.log(rand)
    const value = rand
    setSelected(value)
  }  

  const voting = () => {
    console.log(...vote);
    var copiedArray = [...vote]
    copiedArray[selected] += 1 
    console.log(copiedArray);
    setVotes(copiedArray)
  }

  return (
    <div>
      <h2>Anecdote of the day</h2>
      {anecdotes[selected]}
      <br></br>
      has {vote[selected]} votes
      <br></br>
      <Button handleClick={() => setIndex()} text={"next anecdote"}/>
      <Button handleClick={() => voting()} text={"vote"}/>

      <h2>Anecdote with most votes</h2>

      {anecdotes[vote.indexOf(Math.max(...vote))]}
      <br></br>
      has {Math.max(...vote)} votes
    </div>
  )
}

export default App 