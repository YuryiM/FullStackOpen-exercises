import { useState } from 'react'

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const Statistics = ({ good, neutral, bad }) => {
  if ((good + neutral + bad) > 0) {
    return (
      <tbody>
        <StatisticsLine text="all" value={ good + neutral + bad } />
        <StatisticsLine text="average" value={ (good*1 + bad*-1)/(good + neutral + bad) } />
        <StatisticsLine text="positive" value={ (good/(good + neutral + bad)) * 100 } />
      </tbody>
    )
  }
  // else {
  //   return (
  //     <div>
  //       <p>No feedback given</p>
  //     </div>
  //   )
  // }
}

const StatisticsLine = ({ text, value }) => {
  if (text == "positive") {
    return (
      <tr>
        <td>{text}</td>
        <td>{value}%</td>
      </tr>
    )
  }
  else {
    return (
      <tr>
        <td>{text}</td>
        <td>{value}</td>
      </tr>
    )
  }
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => {
    setGood(good + 1);
  }

  const handleNeutral = () => {
    setNeutral(neutral + 1);
  }

  const handleBad = () => {
    setBad(bad + 1);
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={handleGood} text='good' />
      <Button handleClick={handleNeutral} text='neutral' />
      <Button handleClick={handleBad} text='bad' />
      <h1>statistics</h1>
      <table>
        <thead>
          <tr>
            <td>good</td>
            <td>{good}</td>
          </tr>
          <tr>
            <td>neutral</td>
            <td>{neutral}</td>
          </tr>
          <tr>
            <td>bad</td>
            <td>{bad}</td>
          </tr>
        </thead>
        <Statistics good={good} neutral={neutral} bad={bad}/>
      </table>
    </div>
  )
}

export default App