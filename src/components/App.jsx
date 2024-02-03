import '../css/App.css'
import { BrowserRouter as Router, Routes, Link, Route } from "react-router-dom";
import Home from './HomePage'
import Login from './Login'
import Event from './Events'
import Register from './Register';
import Mentors from './Mentors'

function App() {

  return (
    <Router>
      <div>
        <header >
          <div style={{ color: "white", fontWeight: "bold" }}>SheNetworks</div>
          <nav style={{ display: "flex", justifyContent:"space-evenly"}}>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/events">Events</Link></li>
              <li><Link to="/mentors">Mentors</Link></li>
            </ul>
          </nav>
        </header>
        <Routes>
              <Route path="/" element={<Home />} /> 
              <Route path="/home" element={<Home />} /> 
              <Route path="/login" element={<Login />} /> 
              <Route path="/register" element={<Register />} /> 
              <Route path="/events" element={<Event />} /> 
              <Route path="/mentors" element={<Mentors />} /> 
          </Routes> 
        <footer>
          <section>
            <p> &copy; 2023 EasyHire, Inc</p>
          </section>
          <section>
            <p> About Us | Directions | Contact Us</p>
          </section>
          <section>
            <p> Privacy Policy </p>
          </section>
        </footer>
    </div>  
  </Router>
  )
}

export default App
