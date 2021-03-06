import { useState } from 'react'

const AnecdoteOfTheDay = ({ anecdotes, index, votes }) => {
  console.log("I Updated!");
  return (
    <div>
      <h1>Anecdote of the Day</h1>
      <p>{anecdotes[index]}</p>
      <p>Votes {votes[index]}</p>
    </div>
  )
}

const AnecdoteMostVotes = ({ anecdotes, votes }) => {
  const maxIndex = votes.indexOf(Math.max(...votes));
  return (
    <div>
      <h1>Anecdote with most votes</h1>
      <p>{anecdotes[maxIndex]}</p>
      <p>Votes {votes[maxIndex]}</p>
    </div>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]

  const votesInit = Array(anecdotes.length).fill(0);

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(votesInit);

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  const handleVote = () => {
    const votesCopy = [ ...votes ];
    votesCopy[selected]++;
    setVotes(votesCopy);
  }

  return (
    <div>
      <AnecdoteOfTheDay anecdotes={anecdotes} index={selected} votes={votes}/>
      <button onClick={() => setSelected(getRandomInt(anecdotes.length))}>Random anecdote</button>
      <button onClick={handleVote}>Vote</button>
      <AnecdoteMostVotes anecdotes={anecdotes} votes={votes}/>

    </div>
  )
}

export default App