import { useState } from 'react'

// const Numbers = () => {
  
// }

const Person = ({ name, number }) => {
  return (
    <li>
      {name} {number}
    </li>
  )
}

const App = () => {
  const [persons, setPersons] = useState([
    {
      name: 'Arto Hellas',
      number: '702-601-9659'
    },
    {
      name: 'Yuryi Mironchyk',
      number: '702-601-6938'
    }
  ]) 
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  }

  const addName = (event) => {
    event.preventDefault()
    if(persons.find(person => person.name === newName)) alert(`${newName} is already added to phonebook`);
    else {
      const person = {
        name: newName,
        number: newNumber
      }
      setPersons(persons.concat(person));
      setNewName('');
      setNewNumber('');
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <div>filter shown with <input/></div>
      <h2>add a new</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleNameChange}/>
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        { persons.map((person, i) => 
          <Person key={i} name={person.name} number={person.number} />
        )}
      </ul>
    </div>
  )
}

export default App