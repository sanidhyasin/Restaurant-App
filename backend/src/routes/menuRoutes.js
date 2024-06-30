const express = require("express");
const router = express.Router();
const menuController = require("../controllers/menuController");
const { authenticateJwt } = require("../middleware/authMiddleware");

router.get("/items", authenticateJwt, menuController.getMenuItems);

router.get("/categories", authenticateJwt, menuController.getCategories);

module.exports = router;
