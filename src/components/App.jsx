import '../css/App.css'
import { Routes, Route } from "react-router-dom";
// import Home from './HomePage'

function App() {

  return (
    <div>
      <header >
        <div style={{ color: "white", fontWeight: "bold" }}>EasyHire</div>
        <nav style={{ display: "flex", justifyContent:"space-evenly"}}>
          <ul>
            <li>Home</li>
            <li>Events</li>
            <li>Jobs</li>
          </ul>
        </nav>
      </header>
        {/* <Routes>
            <Route path="/" element={<Home />} />
        </Routes> */}
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
  )
}

export default App
