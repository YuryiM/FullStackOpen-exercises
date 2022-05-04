import React from 'react';
import { CountryInfo } from './CountryInfo'
import { CountriesList } from './CountriesList'

const SearchResults = ({ filter, allCountries }) => {
    if(filter){
        const countries = allCountries.filter(country => country.name.common.toLowerCase().includes(filter.toLowerCase()))
        if(countries.length > 10) {
            return(
                <div><p>Search is too broad</p></div>
            )
        }
        else if(countries.length >= 2){ 
            return(<CountriesList countries={countries} />) 
        }
        else if(countries.length == 1){ 
            return(<CountryInfo country={countries[0]}/>) 
        }
    }
}

export { SearchResults }