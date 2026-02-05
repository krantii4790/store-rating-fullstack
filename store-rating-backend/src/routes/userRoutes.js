const express = require("express");
const router = express.Router();

const auth = require("../middleware/authMiddleware");
const role = require("../middleware/roleMiddleware");
const userController = require("../controllers/userController");

router.get("/stores", auth, role("USER"), userController.getStores);
router.post("/rate", auth, role("USER"), userController.rateStore);

module.exports = router;
