import React, { useEffect, useState } from 'react'
import CountryCard from './CountryCard'
import ShimmerEffect from "./shimmerEffect"

export default function CountryList({inputText,}) {
  const [countryData, setCountryData] = useState([])
  const [isloading, setisloading] = useState(true)

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then((res) => res.json())
      .then((data) => {
        setCountryData(data);
        setisloading(false)
          
        
      })
  

       
      
  }, [])

  

  return (
    <div className="countries-container">
      { isloading? <ShimmerEffect/>  : (countryData.filter((val)=>{
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
      }))}
    </div>
  )
}