import Header from './components/Header'
import SearchBar from './components/SearchBar'
import SelectMenu from './components/SelectMenu'
import CountryList from './components/CountryList'
import './App.css'
import { useState } from 'react'

const App = () => {
  const [inputVal, setinputVal]= useState("");
  return (
    <>
      <Header />
      <main>
        <div className="search-filter-container">   
          <SearchBar setinput={setinputVal} />
          <SelectMenu />
        </div>
        <CountryList inputText={inputVal} />
      </main>
    </>
  )
}

export default App