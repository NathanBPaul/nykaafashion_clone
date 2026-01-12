const Cart = require("../models/cart.model");

exports.checkout = async (req, res) => {
  const cart = await Cart.findOne({ user: req.userId });

  if (!cart || cart.items.length === 0) {
    return res.status(400).json({ message: "Cart is empty" });
  }

  // Fake checkout → just clear cart
  cart.items = [];
  await cart.save();

  res.json({
    success: true,
    message: "Checkout successful 🎉"
  });
};
