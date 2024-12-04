

export default function SearchBar({setinput}) {

  return (
     <>

    <div className="search-container">
      <i className="fa-solid fa-magnifying-glass"></i>
      <input type="text" placeholder="Search for a country..." onChange={(e)=>setinput(e.target.value.toLowerCase())} />
    </div>
      

     

    </>
  )
}