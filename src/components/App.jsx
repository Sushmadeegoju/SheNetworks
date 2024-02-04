import '../css/App.css'
import { useState, useEffect } from "react";
import { Routes, Link, Route } from "react-router-dom";
import Home from './HomePage'
import Login from './Login'
import Event from './Events'
import Register from './Register';
import Mentors from './Mentors'

function App() {

  

  const storedLoggedInState = localStorage.getItem('isLoggedIn');
  const [isLoggedIn, setIsLoggedIn] = useState(storedLoggedInState === 'true');

  useEffect(() => {
    // Fetch the designation and other user details
    if (window.location.pathname === '/') {
      // If it is, set isLoggedIn to false
      setIsLoggedIn(false);
      localStorage.setItem('isLoggedIn', 'false');
    }
  },[]);


  
  const handleLogin = (onLogin) => {
    setIsLoggedIn(onLogin);
    localStorage.setItem('isLoggedIn', 'true');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.setItem('isLoggedIn', 'false');
  };

  return (
      <div>
        <header >
          <div style={{ color: "white", fontWeight: "bold" }}>SheNetworks</div>
          <nav style={{ display: "flex", justifyContent:"space-evenly"}}>
          <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/events">Events</Link></li>
              <li style={{ marginRight: "50px" }}><Link to="/mentors">Mentors</Link></li>
            </ul>
          {isLoggedIn? (
            <div onClick={handleLogout} style={{ display: "flex", justifyContent:"center", marginTop: "15px", marginRight: "15px", color: "white", fontWeight: "bold", cursor: "pointer" }}>
              Logout
            </div>

          ):<ul>
              <li
                style={{ marginRight: "5px", color: "white", fontWeight: "bold" }}
              >
                <Link to="/login"> Login |</Link>
              </li>
              <li style={{ fontWeight: "bold" }}>
                <Link to="/register"> Register</Link>
              </li>
          </ul>
          }
            
          </nav>
        </header>
        <Routes>
              <Route path="/" element={<Home />} /> 
              <Route path="/home" element={<Home />} /> 
              <Route path="/login" element={<Login onLogin={handleLogin}/>} /> 
              <Route path="/register" element={<Register />} /> 
              <Route path="/events" element={<Event />} /> 
              <Route path="/mentors" element={<Mentors />} /> 
          </Routes> 
        <footer>
          <section>
            <p> &copy; 2024 SheNetworks, Inc</p>
          </section>
          <section>
            <p> About Us | Directions | Contact Us</p>
          </section>
          <section>
            <p> Privacy Policy </p>
          </section>
        </footer>
    </div>  
  )
}

export default App
