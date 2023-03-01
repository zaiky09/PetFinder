import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import './navbar.css';

function NavBar({isLoggenIn,setIsLoggedIn}){
    let nav = useNavigate();

    function handleLogout() {
        setIsLoggedIn(false);
    }
    function handleLogin() {

        setIsLoggedIn(true)
        nav("/login");
    }
    return(
        <div>

            <nav class="navbar bg-body-tertiary" style={{backgroundColor: "FFFFFF"}}>
                <div class="container-fluid">
                    {/* Logoimage and text  */}
                    <Link class="navbar-brand" to="/home" href="#">
                    <img src="/pet-finder/src/assets/PET FINDER.png" alt="Logo" width="30" height="24" class="d-inline-block align-text-top"/>
                    PetFinder
                    </Link>

                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                            <Link class="nav-link" to="/about">About</Link>
                            </li>
                            <li class="nav-item">
                            <Link class="nav-link" to="/contact">Contact</Link>
                            </li>
                            <li class="nav-item">
                            <Link class="nav-link" to="/" onClick={handleLogout}>Logout</Link>
                            </li>
                        </ul>
                    </div>

                </div>
            </nav>

        </div>
    );
}

export default NavBar;
