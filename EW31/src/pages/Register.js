
import React, { useState, useEffect } from "react";
import { useNavigate,useLocation  } from "react-router-dom";
import axios from "axios"
import { FaUser, FaCalendarAlt, FaBed, FaDollarSign, FaCommentDots } from "react-icons/fa";
import "../css/Register.css";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3007/register1", {
        name,
        email,
        password,
      });
    } catch (error) {
      setMessage(
        error.response ? error.response.data.message : "Registration failed."
      );
    }
  };
  return (
<div className="register-container">
    <div className="register-box">
      <h1>🌺 Welcome to Paradise 🌴</h1>
      <p>Create your account and start your tropical journey! 🏖️</p>
      <form onSubmit={handleRegister}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Register</button>
      </form>
      {message && <p className="register-message">{message}</p>}
    </div>
  </div>
  );
}
