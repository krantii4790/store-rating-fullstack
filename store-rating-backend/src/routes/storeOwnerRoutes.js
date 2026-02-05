const express = require("express");
const router = express.Router();

const auth = require("../middleware/authMiddleware");
const role = require("../middleware/roleMiddleware");
const storeOwnerController = require("../controllers/storeOwnerController");

router.get(
  "/dashboard",
  auth,
  role("STORE_OWNER"),
  storeOwnerController.dashboard
);

module.exports = router;
