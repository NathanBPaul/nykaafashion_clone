const router = require("express").Router();
const auth = require("../middleware/auth.middleware");

const {
  getWishlist,
  addToWishlist,
  removeFromWishlist
} = require("../controllers/wishlist.controller");

router.get("/", auth, getWishlist);
router.post("/add", auth, addToWishlist);
router.delete("/remove/:productId", auth, removeFromWishlist);

module.exports = router;
