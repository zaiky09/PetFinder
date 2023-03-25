import React,{useState} from "react";
import { usePetUpdate } from "../petcontext/petcontext";


// function Search({handleSearch}) {
//     const [search, setSearch] = useState('');
  
//     function handleChange(e) {
//       setSearch(e.target.value.toLowerCase());
//     }
  
//     function handleSubmit(e) {
//       e.preventDefault();
//       handleSearch(search);
//     }
  
//     return (
//       <form className="searchform" onSubmit={handleSubmit}>
//         <input
//           onChange={handleChange}
//           type="text"
//           placeholder="Find a pet"
//           value={search}
//         />
//         {/* <button type="submit">Search</button> */}
//       </form>
//     );
//   }
  

function Search(){
    const [search,setSearch]=useState('')
    const setPets = usePetUpdate()

    function handleSearchName(search){
        setPets((petnames)=>{
          return petnames.filter((pet)=>{
            console.log(pet)
            return pet.name.toLowerCase().includes(search)
             
          })
        })
      }
    
      function handleSearchBreed(search){
        setPets((petnames)=>{
          return petnames.filter((pet)=>{
            return pet.breed.toLowerCase().includes(search)
             
          })
        })
      }

    function handleChange(e){
        setSearch(e.target.value.toLowerCase())
        console.log(search)
        handleSearchName(search)
    }
    function handleCat(e){
        setSearch(e.target.value.toLowerCase())
        console.log(search)
        handleSearchBreed(search)
    }
    return(
        <form className="searchform">
            <input
            onChange={handleChange}
            type="text"
            placeholder="Find by name"
            />
             <input
            onChange={handleCat}
            type="text"
            placeholder="breed"
            />         
        </form>
    )

}
export default Search