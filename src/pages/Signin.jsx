import { useState } from "react";
import "./signin.css";
import signinImg from "../images/signin.jpg"; 

export default function Login() {

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert("Login successful!");
  }

  return (
    <div className="page">
      <h1>Log In</h1>

      {/* ⭐ LE WRAPPER QUI GÈRE L'ORDRE */}
      <div className="signin-wrapper">

        {/* FORMULAIRE À GAUCHE */}
        <form className="simple-form" onSubmit={handleSubmit}>
          <label>
            Email:
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Password:
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </label>

          <button type="submit">Log In</button>

          <div className="signup-text">
            Don't have an account? <a href="/signup">Sign up!</a>
          </div>
        </form>

        {/* IMAGE À DROITE (IMPORTANT: APRÈS LE FORM !) */}
        <img src={signinImg} className="login-image" alt="signin" />

      </div>
    </div>
  );
}
