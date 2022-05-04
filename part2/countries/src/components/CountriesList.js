import React from 'react'

const CountriesList = ({ countries }) => {
    return (
        <ul>
            { countries.map((country, id) => <li key={id}>{country.name.common}</li> ) }
        </ul>
    )
}

export { CountriesList }