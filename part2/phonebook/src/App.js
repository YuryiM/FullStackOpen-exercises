import { useState } from 'react'

const Persons = ({ persons, search }) => {
  let lowerCase = search.toLowerCase()
  return (
    <ul>
      { persons.map((person, i) => {
        if ((person.name.includes(lowerCase) || person.number.includes(lowerCase))){
          return <Person key={i} name={person.name} number={person.number} /> 
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
      name: 'Arto Hellas',
      number: '568-621-6959'
    },
    {
      name: 'Larry Finklestein',
      number: '329-626-6938'
    }
  ]) 
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