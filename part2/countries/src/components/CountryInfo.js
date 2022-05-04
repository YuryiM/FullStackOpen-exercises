import React from 'react'

const CountryInfo = ({ country }) => {
    console.log("!!!!!!!!!!")
    const languages = Object.values(country.languages)
    return(
        <div>
            <h1>{ country.name.common }</h1>
            <div>
                <p>Capital: { country.capital }</p>
                <p>Area: { country.area } sq km</p>
            </div>
            <h3>Languages:</h3>
            <ul>
                { languages.map((language, id) => <li key={id}>{language}</li>) }
            </ul>
            <img src={country.flags.png}></img>
        </div>
    )
}

export { CountryInfo }