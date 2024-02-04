// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './components/App.jsx'
// import './css/index.css'

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )

// import React from "react";
import { createRoot } from "react-dom";
import { BrowserRouter as Router } from 'react-router-dom';
import App from './components/App.jsx'
import './css/index.css'
import PropTypes from 'prop-types';
PropTypes.checkPropTypes = () => {};

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <Router>
    <App />
  </Router>
);