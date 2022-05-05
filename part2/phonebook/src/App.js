import { useState, useEffect } from 'react'
import axios from 'axios'
import peopleService from './services/people'
import {Persons} from './components/Persons'
import {Filter} from './components/Filter'
import {Form} from './components/Form'

const App = () => {
  const [persons, setPersons] = useState([
  ]) 

  useEffect(() => {
    peopleService.getAll().then(response => {
      setPersons(persons.concat(response.data))
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
      peopleService.create(person)
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