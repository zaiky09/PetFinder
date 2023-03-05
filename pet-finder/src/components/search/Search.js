import React,{useState} from "react";


function Search({handleSearch}) {
    const [search, setSearch] = useState('');
  
    function handleChange(e) {
      setSearch(e.target.value.toLowerCase());
    }
  
    function handleSubmit(e) {
      e.preventDefault();
      handleSearch(search);
    }
  
    return (
      <form className="searchform" onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          type="text"
          placeholder="Find a pet"
          value={search}
        />
        <button type="submit">Search</button>
      </form>
    );
  }
  

// function Search({handleSearchLoc,handleSearchCat}){
//     const [search,setSearch]=useState('')
//     function handleChange(e){
//         setSearch(e.target.value.toLowerCase())
//         handleSearchLoc(search)
//     }
//     function handleCat(e){
//         setSearch(e.target.value.toLowerCase())
//         handleSearchCat(search)
//     }
//     return(
//         <form className="searchform">
//             <input
//             onChange={handleChange}
//             type="text"
//             placeholder="Find a pet"
//             />
//              <input
//             onChange={handleCat}
//             type="text"
//             placeholder="category"
//             />         
//         </form>
//     )

// }
export default Search