// import logo from './logo.svg';
import './App.css';
import Home from './components/home/Home';
import NavBar from './components/navbar/NavBar';
import About from './components/about/About';
import Login from './components/login/Login';
import Signup from './components/signup/Signup';
//import Petlist from './components/petlist/PetList';
// import Contact from './components/contact/Contact';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      {/* <Petlist/> */}
      </BrowserRouter>
      
    </div>
  );
}

export default App;
