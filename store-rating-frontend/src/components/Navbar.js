import { useNavigate } from "react-router-dom";
import "./navbar.css";

export default function Navbar({ title }) {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <h2 className="navbar-title">{title}</h2>

      <button className="logout-btn" onClick={logout}>
        Logout
      </button>
    </nav>
  );
}
