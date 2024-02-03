import '../css/App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './HomePage'
import Login from './Login'

function App() {

  return (
    <Router>
      <div>
        <header >
          <div style={{ color: "white", fontWeight: "bold" }}>SheNetworks</div>
          <nav style={{ display: "flex", justifyContent:"space-evenly"}}>
            <ul>
              <li>Home</li>
              <li>Events</li>
              <li>Jobs</li>
            </ul>
          </nav>
        </header>
        <Routes>
              <Route path="/" element={<Home />} /> 
              <Route path="/login" element={<Login />} /> 
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
