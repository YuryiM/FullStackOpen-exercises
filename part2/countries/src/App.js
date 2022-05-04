import React, { useState, useEffect } from 'react'
import logo from './logo.svg';
import './App.css';
// import { Search } from './components/Search'
import { SearchResults } from './components/SearchResults'
import axios from 'axios'

const Search = ({ value, onChange}) => {
  console.log("!!!!!!!!!!")
  return (
      <div>
          <p>find countries</p> 
          <input value={value} onChange={onChange}/>
      </div>
  )
  
}

function App() {
  const [allCountries, setAllCountries] = useState([])
  const [displayCountries, setDisplayCountries] = useState([])
  const [filter, setFilter] = useState('')

  useEffect(() => {
    const promise = axios.get('https://restcountries.com/v3.1/all')

    promise.then(response => {
      setAllCountries(response.data)
    })
  }, [])

  const updateCountries = () => {
    const filteredCountries = allCountries.filter(country => country.name.common.includes(filter))
    setDisplayCountries(filteredCountries)
    console.log(filter)
  }

  const filterChange = event => {
    setFilter(event.target.value)
  }

  return (
    <div>
      <Search 
        value={filter}
        onChange={filterChange}
      />
      <SearchResults 
        allCountries={allCountries}
        filter={filter}
      />
    </div>
  );
}

export default App;
