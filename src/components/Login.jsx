/* eslint-disable react/prop-types */
import '../css/login.css';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
PropTypes.checkPropTypes = () => {};

function Login({ onLogin }) {
    const navigate = useNavigate(); // Get the history object from React Router

  const handleSubmit = async (event) => {
    event.preventDefault();
    const loginEmail = document.getElementById("email-txt").value;
    const loginPassword = document.getElementById("password").value;

    // Do something with the email and password, for example, log them to the console
    console.log("Email:", loginEmail);
    console.log("Password:", loginPassword);

    try {
      const response = await fetch("http://localhost:4000/validate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ loginEmail, loginPassword }),
      });

      if (response.ok) {
        console.log("successfully logged in!");
        onLogin(true);
        navigate('/events');
      } else {
        const errorMessage = await response.json();
        alert(`Error: ${errorMessage["error"]}`);
      }
    } catch (error) {
      console.error("Error:", error);
      alert(`Error: ${error}`);
    }
  };

  const handleForgotPassword = () => {
    navigate("/forgot-password"); // Navigate to the forgot password route
  };

  return (
    <div>
      <div className="login-container">
        <div className="login-card">
          <div className="login-header">
            <h2>Welcome Back</h2>
          </div>
          <form className="login-form" onSubmit={handleSubmit}>
            <input
              type="email"
              id="email-txt"
              placeholder="Email Address"
              required
            />
            <input
              type="password"
              id="password"
              placeholder="Password"
              required
            />
            <br />
            <br />
            <button type="submit">LOG IN</button>
          </form>
          <br />
          <a
            href="#"
            className="forgot-password"
            onClick={handleForgotPassword}
          >
            FORGOT PASSWORD?
          </a>
        </div>
      </div>
    </div>
  );
}

export default Login;
