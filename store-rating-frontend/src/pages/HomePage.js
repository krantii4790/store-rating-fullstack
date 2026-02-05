import { useNavigate } from "react-router-dom";
import "../styles/home.css";

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="home-wrapper">
      <div className="home-card">
        <h1 className="home-title">Full Stack Intern Coding Assessment</h1>

        <p className="home-subtitle">
          Store Rating & Role-Based Dashboard System
        </p>

        <p className="home-description">
          A full-stack web application that allows users to rate stores,
          store owners to view ratings, and admins to manage platform data
          using secure role-based authentication.
        </p>

        <p className="home-tech">
          <strong>Tech Stack:</strong> React, Node.js, Express, MySQL, JWT
        </p>

        <div className="home-actions">
          <button
            className="btn primary"
            onClick={() => navigate("/login")}
          >
            Login
          </button>

          <button
            className="btn secondary"
            onClick={() => navigate("/register")}
          >
            Register
          </button>
        </div>

        <p className="home-footer">
          Designed as part of a Full Stack Developer Assessment
        </p>
      </div>
    </div>
  );
}
