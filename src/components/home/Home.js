import React from "react";
import './home.css';
import About from "../about/About";
import Petlist from "../petlist/PetList";
import Contact from "../contact/Contact";
import Search from "../search/Search";


function Home(handleSearchBreed,handleSearchName) {
    
    return (
    <div>
        <div className="hero">
            <div className="text">
                
                <div className="position-absolute top-50 start-50 translate-middle-x">
                <h2>Welcome to PetFinder</h2>
                {/* <form className="d-flex">
                    <input className="form-control me-3" type="search" placeholder="Find a pet...." aria-label="Search"/>
                    <button className="btn btn-outline-light" type="submit"><strong>Search</strong></button>
                </form> */}
                <Search 
                handleSearchBreed={handleSearchBreed}
                handleSearchName = {handleSearchName} />
                </div>
            </div>
        </div>
        <Petlist/>
        <About/> 
        <Contact/> 
    </div>
      
    );       
}

export default Home;