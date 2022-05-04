import React from 'react'

const CountriesList = ({ countries, handleClick }) => {
    return (
        <ul>
            { countries.map((country, id) => 
                <li key={id}>{country.name.common} <button onClick={handleClick} id={country.name.common}>show</button></li> 
            ) }
        </ul>
    )
}

export { CountriesList }