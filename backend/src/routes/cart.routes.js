const router = require("express").Router();
const auth = require("../middleware/auth.middleware.js");
const {
  getCart,
  addToCart,
  removeFromCart
} = require("../controllers/cart.controller");

router.get("/", auth, getCart);
router.post("/add", auth, addToCart);
router.delete("/remove/:productId", auth, removeFromCart);

module.exports = router;
