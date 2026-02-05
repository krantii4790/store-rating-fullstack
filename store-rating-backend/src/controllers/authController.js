const db = require("../config/db");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.signup = (req, res) => {
  const { name, email, password, address } = req.body;

  const hashedPassword = bcrypt.hashSync(password, 10);

  const sql = `
    INSERT INTO users (name, email, password, address, role)
    VALUES (?, ?, ?, ?, 'USER')
  `;

  db.query(sql, [name, email, hashedPassword, address], err => {
    if (err) return res.status(400).json({ message: "Email exists" });
    res.json({ message: "Signup success" });
  });
};

exports.login = (req, res) => {
  const { email, password } = req.body;

  db.query("SELECT * FROM users WHERE email=?", [email], (err, data) => {
    if (!data.length)
      return res.status(404).json({ message: "User not found" });

    const user = data[0];
    const valid = bcrypt.compareSync(password, user.password);

    if (!valid)
      return res.status(401).json({ message: "Invalid password" });

    const token = jwt.sign(
      { id: user.id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    res.json({ token, role: user.role });
  });
};
