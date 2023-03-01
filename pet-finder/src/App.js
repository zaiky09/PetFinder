// import logo from './logo.svg';
import './App.css';
import NavBar from './components/navbar/NavBar';
import About from './components/about/About';
import Login from './components/login/Login';
// import Contact from './components/contact/Contact';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/about" element={<About />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
        <Route path="/" element={<Login />} />
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
