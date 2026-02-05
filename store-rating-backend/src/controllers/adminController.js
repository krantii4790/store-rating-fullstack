const db = require("../config/db");
const bcrypt = require("bcryptjs");

/* Dashboard counts */
exports.dashboard = (req, res) => {
  const queries = {
    users: "SELECT COUNT(*) total FROM users",
    stores: "SELECT COUNT(*) total FROM stores",
    ratings: "SELECT COUNT(*) total FROM ratings"
  };

  Promise.all(
    Object.values(queries).map(
      q => new Promise(resolve => db.query(q, (_, r) => resolve(r[0].total)))
    )
  ).then(([users, stores, ratings]) => {
    res.json({ users, stores, ratings });
  });
};

/* Add User */
exports.addUser = (req, res) => {
  const { name, email, password, address, role } = req.body;

  const hashedPassword = bcrypt.hashSync(password, 10);

  const sql = `
    INSERT INTO users (name, email, password, address, role)
    VALUES (?, ?, ?, ?, ?)
  `;

  db.query(sql, [name, email, hashedPassword, address, role], err => {
    if (err) return res.status(400).json({ message: "User exists" });
    res.json({ message: "User added successfully" });
  });
};

/* Add Store */
exports.addStore = (req, res) => {
  const { name, email, address, owner_id } = req.body;

  const sql = `
    INSERT INTO stores (name, email, address, owner_id)
    VALUES (?, ?, ?, ?)
  `;

  db.query(sql, [name, email, address, owner_id], err => {
    if (err) return res.status(400).json({ message: "Error adding store" });
    res.json({ message: "Store added successfully" });
  });
};


exports.getUsers = (req, res) => {
  let { name, email, address, role, sortBy, order } = req.query;

  let sql = `
    SELECT id, name, email, address, role
    FROM users
    WHERE 1=1
  `;
  let params = [];

  if (name) {
    sql += " AND name LIKE ?";
    params.push(`%${name}%`);
  }

  if (email) {
    sql += " AND email LIKE ?";
    params.push(`%${email}%`);
  }

  if (address) {
    sql += " AND address LIKE ?";
    params.push(`%${address}%`);
  }

  if (role) {
    sql += " AND role = ?";
    params.push(role);
  }

  // Sorting
  sortBy = sortBy || "name";
  order = order === "DESC" ? "DESC" : "ASC";
  sql += ` ORDER BY ${sortBy} ${order}`;

  db.query(sql, params, (err, result) => {
    if (err) return res.status(500).json({ message: "Error fetching users" });
    res.json(result);
  });
};

exports.getStores = (req, res) => {
  let { name, email, address, sortBy, order } = req.query;

  let sql = `
    SELECT 
      s.id,
      s.name,
      s.email,
      s.address,
      ROUND(AVG(r.rating),1) AS rating
    FROM stores s
    LEFT JOIN ratings r ON s.id = r.store_id
    WHERE 1=1
  `;
  let params = [];

  if (name) {
    sql += " AND s.name LIKE ?";
    params.push(`%${name}%`);
  }

  if (email) {
    sql += " AND s.email LIKE ?";
    params.push(`%${email}%`);
  }

  if (address) {
    sql += " AND s.address LIKE ?";
    params.push(`%${address}%`);
  }

  sql += " GROUP BY s.id";

  // Sorting
  sortBy = sortBy || "name";
  order = order === "DESC" ? "DESC" : "ASC";
  sql += ` ORDER BY ${sortBy} ${order}`;

  db.query(sql, params, (err, result) => {
    if (err) return res.status(500).json({ message: "Error fetching stores" });
    res.json(result);
  });
};
