const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");

// ✅ USER REGISTRATION
router.post("/signup", authController.signup);

// ✅ LOGIN
router.post("/login", authController.login);

module.exports = router;
