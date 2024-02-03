import { createRoot } from "react-dom";
import { BrowserRouter as Router } from 'react-router-dom';
import "./frontend/css/index.css";
import App from "./frontend/components/App";

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <Router>
    <App />
  </Router>
);
