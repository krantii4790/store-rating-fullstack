const db = require("../config/db");

/* Get all stores with average rating */
exports.getStores = (req, res) => {
  const userId = req.user.id;

  const sql = `
    SELECT 
      s.id,
      s.name,
      s.address,
      ROUND(AVG(r.rating),1) AS avg_rating,
      ur.rating AS user_rating
    FROM stores s
    LEFT JOIN ratings r ON s.id = r.store_id
    LEFT JOIN ratings ur 
      ON s.id = ur.store_id AND ur.user_id = ?
    GROUP BY s.id
  `;

  db.query(sql, [userId], (err, result) => {
    if (err) return res.status(500).json({ message: "Error fetching stores" });
    res.json(result);
  });
};

/* Submit or update rating */
exports.rateStore = (req, res) => {
  const { store_id, rating } = req.body;
  const userId = req.user.id;

  if (rating < 1 || rating > 5) {
    return res.status(400).json({ message: "Rating must be 1 to 5" });
  }

  const sql = `
    INSERT INTO ratings (user_id, store_id, rating)
    VALUES (?, ?, ?)
    ON DUPLICATE KEY UPDATE rating = ?
  `;

  db.query(sql, [userId, store_id, rating, rating], err => {
    if (err) return res.status(500).json({ message: "Rating failed" });
    res.json({ message: "Rating submitted successfully" });
  });
};
