import SearchBar from './SearchBar'
import SelectMenu from './SelectMenu'
import CountryList from './CountryList'
import '../App.css'
import { useState } from 'react'
import { useOutletContext } from 'react-router-dom'

const Home = () => {
  // using the lifting the state up technique
  const [inputVal, setinputVal]= useState("");
  const [isDark] = useOutletContext();
  
  return (
    <>
  
      <main className={`${isDark? 'dark': ''}`}>
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