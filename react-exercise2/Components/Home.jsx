import SearchBar from './SearchBar'
import SelectMenu from './SelectMenu'
import CountryList from './CountryList'
import '../App.css'
import { useState } from 'react'

const Home = () => {
  // using the lifting the state up technique
  const [inputVal, setinputVal]= useState("");
  
  
  return (
    <>
  
      <main>
        <div className="search-filter-container">   
          <SearchBar setinput={setinputVal} />
          <SelectMenu />
        </div>
       <CountryList inputText={inputVal}/> 
      </main>
    </>
  )
}

export default Home