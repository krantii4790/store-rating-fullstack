const express = require("express");
const router = express.Router();

const auth = require("../middleware/authMiddleware");
const role = require("../middleware/roleMiddleware");
const adminController = require("../controllers/adminController");

router.get("/dashboard", auth, role("ADMIN"), adminController.dashboard);
router.post("/add-user", auth, role("ADMIN"), adminController.addUser);
router.post("/add-store", auth, role("ADMIN"), adminController.addStore);
router.get("/users", auth, role("ADMIN"), adminController.getUsers);
router.get("/stores", auth, role("ADMIN"), adminController.getStores);

module.exports = router;
