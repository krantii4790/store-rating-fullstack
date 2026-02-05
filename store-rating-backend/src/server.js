require("dotenv").config();
const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend running");
});

// 👇 THIS IS THE FIX
app.use("/api/auth", authRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});



const adminRoutes = require("./routes/adminRoutes");
app.use("/api/admin", adminRoutes);

const userRoutes = require("./routes/userRoutes");
app.use("/api/user", userRoutes);

const storeOwnerRoutes = require("./routes/storeOwnerRoutes");
app.use("/api/store-owner", storeOwnerRoutes);
