import React from 'react'
import countryData from '../countryData'
import CountryCard from './CountryCard'

export default function CountryList({inputText}) {
  return (
    <div className="countries-container">
      {countryData.filter((val)=>{
         return val.name.common.toLowerCase().includes(inputText);
      }).map((country) => {
        return (
          <CountryCard
            key={country.name.common}
            name={country.name.common}
            flag={country.flags.svg}
            population={country.population}
            region={country.region}
            capital={country.capital?.[0]}
          />
        )
      })}
    </div>
  )
}