const express = require("express");
const authRouter = require("./authRoutes");
const orderRouter = require("./orderRoutes");
const menuRouter = require("./menuRoutes");
const router = express.Router();

router.use("/auth", authRouter);
router.use("/orders", orderRouter);
router.use("/menu", menuRouter);

module.exports = router;
