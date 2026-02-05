import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../api/axios";
import "../styles/auth.css";

export default function RegisterPage() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    address: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const register = async (e) => {
    e.preventDefault();

    try {
      await api.post("/auth/signup", form);
      alert("Registration successful. Please login.");
      navigate("/login");
    } catch (err) {
      alert(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="auth-wrapper">
      <form className="auth-card" onSubmit={register}>
        <h2>Register</h2>

        <input name="name" placeholder="Full Name" required onChange={handleChange} />
        <input name="email" type="email" placeholder="Email" required onChange={handleChange} />
        <input name="password" type="password" placeholder="Password" required onChange={handleChange} />
        <input name="address" placeholder="Address" required onChange={handleChange} />

        <button type="submit">Register</button>

        <p>
          Already registered? <Link to="/login">Login</Link>
        </p>
      </form>
    </div>
  );
}
