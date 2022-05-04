import React from 'react'

const Search = ({ value, onChange}) => {
    
    return (
        <div>
            <p>find countries</p> 
            <input value={value} onChange={onChange}/>
        </div>
    )
    
}

export { Search }