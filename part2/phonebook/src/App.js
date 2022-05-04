import { useState, useEffect } from 'react'
import axios from 'axios'

const Persons = ({ persons, search }) => {
  const lowerCase = search.toLowerCase()
  return (
    <ul>
      { persons.map(person => {  
        if ((person.name.includes(lowerCase) || person.number.includes(lowerCase))){
          return <Person key={person.id} name={person.name} number={person.number} />
        }
      })}
    </ul>
  )  
}

const Person = ({ name, number }) => {
  return (
    <li>
      {name} {number}
    </li>
  )
}

const Filter = (props) => {
  return (
    <div>
      filter shown with <input value={props.searchString} onChange={props.handleSearchChange}/>
    </div>
  )
}

const Form = (props) => {
  return (
    <div>
      <form onSubmit={props.onSubmit}>
        <div>
          name: <input value={props.nameValue} onChange={props.handleNameChange}/>
        </div>
        <div>
          number: <input value={props.newNumber} onChange={props.handleNumberChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </div>
  )
}

const App = () => {
  const [persons, setPersons] = useState([
    { 
      "name": "Richard Butt", 
      "number": "040-123456",
      "id": 0
    },
  ]) 

  useEffect(() => {
    const promise = axios.get('http://localhost:3001/persons')
    promise.then(response => {
      const serverResponse = response.data
      setPersons(persons.concat(serverResponse))
    })
  }, [])

  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [searchString, setSearchString] = useState('');

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  }

  const handleSearchChange = (event) => {
    setSearchString(event.target.value);
  }

  const addPerson = (event) => {
    event.preventDefault()
    if(persons.find(person => person.name === newName)) alert(`${newName} is already added to phonebook`);
    else {
      const person = {
        'name': newName,
        'number': newNumber
      }
      setPersons(persons.concat(person));
      setNewName('');
      setNewNumber('');
    }
  }
  
  return (
    <div>
      <h2>Phonebook</h2>
      <Filter 
        searchString = {searchString}
        handleSearchChange = {handleSearchChange}
      />
      
      <h2>add a new</h2>
      <Form
        onSubmit = {addPerson}
        nameValue = {newName}
        handleNameChange = {handleNameChange}
        newNumber = {newNumber}
        handleNumberChange = {handleNumberChange}
      />
      <h2>Numbers</h2>
      <Persons 
        persons={persons} 
        search={searchString}
      />
    </div>
  )
}

export default App