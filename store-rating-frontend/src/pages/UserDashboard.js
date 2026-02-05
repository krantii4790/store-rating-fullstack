import { useEffect, useState } from "react";
import axios from "axios";
import StarRating from "../components/StarRating";
import Navbar from "../components/Navbar";

export default function UserDashboard() {
  const [stores, setStores] = useState([]);
  const [rating, setRating] = useState({});

  useEffect(() => {
    axios.get("http://localhost:5000/api/user/stores", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }).then(res => setStores(res.data));
  }, []);

  const submitRating = (storeId) => {
    if (!rating[storeId]) {
      alert("Please select rating");
      return;
    }

    axios.post(
      "http://localhost:5000/api/user/rate",
      { store_id: storeId, rating: rating[storeId] },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    ).then(() => alert("Rating submitted successfully ⭐"));
  };

  return (
    <>
      <Navbar title="User Dashboard" />

      <div className="container">
        {stores.map(store => (
          <div className="card" key={store.id}>
            <h3>{store.name}</h3>
            <p>{store.address}</p>
            <p>Average Rating: {store.avg_rating || "N/A"}</p>

            <StarRating
              value={rating[store.id] || 0}
              onChange={(star) =>
                setRating({ ...rating, [store.id]: star })
              }
            />

            <br />
            <button className="btn" onClick={() => submitRating(store.id)}>
              Submit Rating
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
