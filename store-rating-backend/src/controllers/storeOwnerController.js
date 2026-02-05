const db = require("../config/db");

exports.dashboard = (req, res) => {
  const ownerId = req.user.id;

  // 1️⃣ Get store owned by this user
  const storeQuery = `
    SELECT id, name
    FROM stores
    WHERE owner_id = ?
  `;

  db.query(storeQuery, [ownerId], (err, storeResult) => {
    if (err || storeResult.length === 0) {
      return res.status(404).json({ message: "Store not found" });
    }

    const storeId = storeResult[0].id;

    // 2️⃣ Get ratings & users
    const ratingQuery = `
      SELECT 
        u.name AS user_name,
        u.email,
        r.rating
      FROM ratings r
      JOIN users u ON r.user_id = u.id
      WHERE r.store_id = ?
    `;

    db.query(ratingQuery, [storeId], (err, ratings) => {
      if (err) {
        return res.status(500).json({ message: "Error fetching ratings" });
      }

      // 3️⃣ Calculate average rating
      const avgRating =
        ratings.length === 0
          ? null
          : (
              ratings.reduce((sum, r) => sum + r.rating, 0) /
              ratings.length
            ).toFixed(1);

      res.json({
        store: storeResult[0].name,
        average_rating: avgRating,
        ratings
      });
    });
  });
};
