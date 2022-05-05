import {Person} from './Person'

const Persons = ({ persons, search }) => {
    const lowerCase = search.toLowerCase()
    return (
      <ul>
        { persons.map((person,id) => {  
          if ((person.name.toLowerCase().includes(lowerCase) || person.number.includes(lowerCase))){
            return <Person key={person.id} name={person.name} number={person.number} />
          }
        })}
      </ul>
    )  
}

export {Persons}