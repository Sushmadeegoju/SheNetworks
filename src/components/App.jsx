import '../css/App.css'
import { useState, useEffect } from "react";
import { Routes, Link, Route } from "react-router-dom";
// import { useNavigate } from 'react-router-dom';
import Home from './HomePage'
import Login from './Login'
import Event from './Events'
import Register from './Register';
import Mentors from './Mentors'
// import IconButton from '@mui/material/IconButton';
// import Menu from '@mui/material/Menu';
// import MenuItem from '@mui/material/MenuItem';
// import MoreVertIcon from '@mui/icons-material/MoreVert';

// const ITEM_HEIGHT = 48;

function App() {

  // const navigate = useNavigate();

  // const [anchorEl, setAnchorEl] = useState(null);
  // const open = Boolean(anchorEl);
  // const handleClick = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };
  // const handleClose = (option) => { 
  //   setAnchorEl(null);
  //     switch (option) {
  //       case 'Events':
  //           navigate('/events');
  //           break;
  //       case 'Mentors':
  //         navigate('/mentors'); // Adjust the route as needed
  //         break;
  //       case 'Logout':
  //         handleLogout();
  //         console.log("Logged out");
  //         navigate('/login');
  //         break;
  //       default:
  //         break;
  //     }
  // };

  const storedLoggedInState = localStorage.getItem('isLoggedIn');
  const [isLoggedIn, setIsLoggedIn] = useState(storedLoggedInState === 'true');

  // const [options] = ['Events', 'Mentors', 'Logout'];

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

  // const handleLogout = () => {
  //   setIsLoggedIn(false);
  //   localStorage.setItem('isLoggedIn', 'false');
  // };

  return (
      <div>
        <header >
          <div style={{ color: "white", fontWeight: "bold" }}>SheNetworks</div>
          <nav style={{ display: "flex", justifyContent:"space-evenly"}}>
          <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/events">Events</Link></li>
              <li><Link to="/mentors">Mentors</Link></li>
            </ul>
          {isLoggedIn? (
            <div>
              Login
            {/* <IconButton
              class = "three_dots"
              aria-label="more"
              id="long-button"
              aria-controls={open ? 'long-menu' : undefined}
              aria-expanded={open ? 'true' : undefined}
              aria-haspopup="true"
              onClick={handleClick}
            >
              <MoreVertIcon style={{ color: "white", marginTop: "6px"}}/>
            </IconButton>
            <Menu
              id="long-menu"
              MenuListProps={{
                'aria-labelledby': 'long-button',
              }}
              anchorEl={anchorEl}
              open={open}
              onClose={() => handleClose('')}
              PaperProps={{
                style: {
                  maxHeight: ITEM_HEIGHT * 4.5,
                  width: '20ch',
                },
              }}
            >
              {options.map((option) => (
                <MenuItem key={option} selected={option === 'Pyxis'} onClick={() => handleClose(option)}>
                  {option}
                </MenuItem>
              ))}
            </Menu> */}
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
