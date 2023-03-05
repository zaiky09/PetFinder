import React, {useState} from 'react';
import './App.css';
import Home from './components/home/Home';
import NavBar from './components/navbar/NavBar';
import About from './components/about/About';
import Login from './components/login/Login';
import Signup from './components/signup/Signup';
import Petlist from './components/petlist/PetList';
import Contact from './components/contact/Contact';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="App">
      <BrowserRouter>
      {isLoggedIn?
      (<NavBar
      isLoggedIn={isLoggedIn}
      setIsLoggedIn={setIsLoggedIn}/>):(null)}
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/petlist" element={<Petlist />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/" element={<Login 
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}/>} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
