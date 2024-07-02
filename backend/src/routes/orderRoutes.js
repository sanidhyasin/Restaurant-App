const express = require("express");
const router = express.Router();
const orderController = require("../controllers/orderController");
const {
  authenticateJwt,
  authorizeRole,
} = require("../middleware/authMiddleware");

router.post(
  "/",
  authenticateJwt,
  authorizeRole("customer"),
  orderController.createOrder
);
router.get(
  "/current",
  authenticateJwt,
  authorizeRole("customer"),
  orderController.getCurrentOrder
);
router.get(
  "/history",
  authenticateJwt,
  authorizeRole("customer"),
  orderController.getOrderHistory
);
router.get(
  "/incoming",
  authenticateJwt,
  authorizeRole("staff"),
  orderController.getIncomingOrders
);
router.put(
  "/:id/complete",
  authenticateJwt,
  authorizeRole("staff"),
  orderController.completeOrder
);

module.exports = router;
