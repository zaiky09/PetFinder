import React, {useEffect,useState} from "react";
// import Animated from "./Animated";
import About from "../about/About";
// import './about.css'
// import { Link } from "react-router-dom";
//import homepag from '../assets/homepg.svg';
//import homepage from '../assets/homepage.jpg';
import Petlist from "../petlist/PetList";
import './home.css';


function Home() {
    
    return (
    <div>
        <div className="hero">
            <div className="text">
                {/* <h1>Welcome to PetFinder</h1> */}
                <div className="position-absolute top-50 start-50 translate-middle-x">
                <form className="d-flex">
                    <input className="form-control me-3" type="search" placeholder="Find a pet...." aria-label="Search"/>
                    <button className="btn btn-outline-light" type="submit"><strong>Search</strong></button>
                </form>
                </div>
            </div>
        </div>
    </div>
        
    );       
}

export default Home;


// {/* <div class="card text-bg-dark">
//         <img src={homepag} class="img-fluid" alt="..."/>
//             <img src={homepag} class="card-img" alt="..."/>
//             <div class="card-img-overlay">
//                 <h5 class="card-title">Card title</h5>
//                 <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
//                 <p class="card-text"><small>Last updated 3 mins ago</small></p>
//             </div>
//         </div> 
//         <div className="container-fluid w-100 position-relative">
//             <div class="container-fluid h-50 w-100">
//                 <img src={homepag} alt="PetFinder" className="img-fluid"/>
//             </div>
//             <div className="position-absolute top-50 start-50 translate-middle-x">
//             <form className="d-flex">
//                 <input className="form-control me-3" type="search" placeholder="Find a pet...." aria-label="Search"/>
//                 <button className="btn btn-outline-dark" type="submit"><strong>Search</strong></button>
//             </form>
//             </div>
//         </div>

//         <div>
//             <Petlist/>
//             <About/>
// </div>*/}