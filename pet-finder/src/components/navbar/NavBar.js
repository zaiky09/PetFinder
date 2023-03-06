import React, {useState} from 'react';
import { Link, useNavigate } from "react-router-dom";
import '../navbar/navbar.css';

//import logo from '../assets/PET FINDER_adobe_express.svg';

// function NavBar({isLoggedIn,setIsLoggedIn}){
//     let nav = useNavigate();

//     function handleLogout() {
//         setIsLoggedIn(false);
//     }
//     function handleLogin() {

//         setIsLoggedIn(true)
//         nav("/login");
//     }
//     return(
//         <div>

//             <nav className="navbar navbar-expand-lg bg-body-custom" id="bcolor">
//                 <div className="container-fluid">
//                     <Link className="navbar-brand" to="/home" href="#"><strong>PetFinder</strong></Link>
//                     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//                     <span className="navbar-toggler-icon"></span>
//                     </button>
//                     <div className="collapse navbar-collapse" id="navbarNav">
//                         <ul className="navbar-nav">
//                             <li className="nav-item">
//                             <Link className="nav-link active" aria-current="page" to="/about" href="#">About Us</Link>
//                             </li>
//                             <li className="nav-item">
//                             <Link className="nav-link" to="/contact" href="#">Contact Us</Link>
//                             </li>
//                             <li className="nav-item">
//                             <Link className="nav-link" to="/petlist" href="#">Pet List</Link>
//                             </li>
//                         </ul>
//                         <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
//                             <li className="nav-item">
//                             {isLoggedIn ? (
//                         //  <button id="login-btn"
//                         //  className="btn btn-outline-primary ms-2"
//                         //   type="button"
//                         //   onClick={handleLogout}
//                         //   >Logout
//                              <Link className="active me-3 navbar-brand" onClick={handleLogout} to="/login">Logout
//                               </Link> 
//                         // </button>
//                         ):(
//                              <Link className="nav-link" to="/" onClick={handleLogin}><strong>Login</strong></Link>
//                         //   <button id="login-btn"
//                         //   className="btn btn-outline-primary ms-2"
//                         //    type="button"
//                         //    onClick={handleLogin}> Login
//                         //   </button>
//                         )}
//                             {/* <Link className="nav-link" to="/" onClick={handleLogout}><strong>Log out</strong></Link> */}
//                             </li>
//                         </ul>
//                     </div>
//                 </div>
//             </nav>
//         </div>
//     );
// }

function NavBar({setIsLoggedIn, isLoggedIn}){
    
    let nav = useNavigate();

    function handleLogout() {
        setIsLoggedIn(false);
        // nav("/login");
    }

    function handleLogin() {
        setIsLoggedIn(true);
        nav("/home");
    }

    return(
        <div>
            <nav className="navbar navbar-expand-lg bg-body-custom" id="bcolor">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/home" href="#"><strong>PetFinder</strong></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/about" href="#">About Us</Link>
                            </li>
                            {/* <li className="nav-item">
                                <Link className="nav-link" to="/contact" href="#">Contact Us</Link>
                            </li> */}
                            <li className="nav-item">
                                <Link className="nav-link" to="/petlist" href="#">Pet List</Link>
                            </li>
                        </ul>
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            {isLoggedIn ? (
                                <li className="nav-item">
                                    <Link className="active me-3 navbar-brand" onClick={handleLogout} to="/">Logout</Link>
                                </li>
                            ) : (
                                <li className="nav-item">
                                    <Link className="nav-link" to="/home" onClick={handleLogin}><strong>Login</strong></Link>
                                </li>
                            )}
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}


export default NavBar;


        
