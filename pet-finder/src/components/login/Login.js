import React, { useState } from "react";
import { useNavigate,Link } from "react-router-dom";
import logo from '../assets/PET FINDER_adobe_express.svg';
import '../login/login.css';

function Login() {
 
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  
  let nav = useNavigate();

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
        
        nav("/home");
      
    }

  return (
    <div className="container-fluid" id="log">
      <img src={logo} alt="Logo" width="200" height="180" class="d-inline-block align-text-top"/>
      
      <form onSubmit={handleSubmit} >
        <div className="row justify-content-center">
          <div className="form-group mb-2 col-md-4">
            <input
              type="email"
              placeholder="Email Address"
              name="email"
              id="email"
              className="form-control"
              onChange={handleChange}
              value={formData.email}
            />
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="form-group mb-4 col-md-4">
            <input
              type="password"
              placeholder="password"
              name="password"
              id="password"
              className="form-control"
              onChange={handleChange}
              value={formData.password}
            />
          </div>
        </div>
        <center>
          <button type="submit" className="btn btn-outline-dark mb-4">Login</button>
        
          <p className="forgot-password text-right">
            Need an account? 
            <br></br>
            <Link to="/signup">Sign up?</Link>
          </p>
        </center>
      </form>
  </div>
     
  );
}

export default Login;