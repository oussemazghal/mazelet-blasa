import { useState } from "react";
import "./Signup.css";
import loginImg from "../images/login.jpg"; 

export default function Signup() {

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    cpassword: ""
  });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Form data:", formData);
    alert("Form submitted!");
  }

  return (
    <div className="page">
      <h1>Sign Up</h1>

      {/* ⭐ Wrapper contenant formulaire + image */}
      <div className="form-wrapper">

        <form className="simple-form" onSubmit={handleSubmit}>

          <label>
            Username:
            <input
              type="text"
              name="username"
              placeholder="Enter your username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </label>

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
              placeholder="Enter a password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Confirm Password:
            <input
              type="password"
              name="cpassword"
              placeholder="Confirm your password"
              value={formData.cpassword}
              onChange={handleChange}
              required
            />
          </label>

          <button type="submit">Create Account</button>

          <div className="login-text">
            Already have an account? <a href="/login">Log in</a>
          </div>
        </form>

        
        <img src={loginImg} className="login-image" alt="login visual" />

      </div>
    </div>
  );
}
