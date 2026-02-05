import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";

export default function StoreOwnerDashboard() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:5000/api/store-owner/dashboard", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }).then(res => setData(res.data));
  }, []);

  if (!data) return <p>Loading...</p>;

  return (
    <>
      <Navbar title="Store Owner Dashboard" />

      <div className="container">
        <div className="card">
          <h3>{data.store}</h3>
          <p>Average Rating: {data.average_rating}</p>
        </div>

        <h3>Ratings</h3>

        {data.ratings.map((r, index) => (
          <div className="card" key={index}>
            <p><strong>User:</strong> {r.user_name}</p>
            <p><strong>Email:</strong> {r.email}</p>
            <p><strong>Rating:</strong> {"⭐".repeat(r.rating)}</p>
          </div>
        ))}
      </div>
    </>
  );
}
