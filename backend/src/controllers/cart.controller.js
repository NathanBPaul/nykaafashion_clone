const Cart = require("../models/cart.model");
const Product = require("../models/product.model");

// GET cart
exports.getCart = async (req, res) => {
  const cart = await Cart.findOne({ user: req.user.id }).populate("items.product");

  if (!cart) {
    return res.json({ items: [] });
  }

  res.json(cart);
};

// ADD to cart
exports.addToCart = async (req, res) => {
  const { productId } = req.body;

  const product = await Product.findById(productId);
  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }

  let cart = await Cart.findOne({ user: req.user.id });

  if (!cart) {
    cart = new Cart({
      user: req.user.id,
      items: [{ product: productId, quantity: 1 }]
    });
  } else {
    const itemIndex = cart.items.findIndex(
      item => item.product.toString() === productId
    );

    if (itemIndex > -1) {
      cart.items[itemIndex].quantity += 1;
    } else {
      cart.items.push({ product: productId, quantity: 1 });
    }
  }

  await cart.save();
  res.json({ message: "Added to cart", cart });
};

// REMOVE item
exports.removeFromCart = async (req, res) => {
  const { productId } = req.params;

  const cart = await Cart.findOne({ user: req.user.id });

  if (!cart) {
    return res.status(404).json({ message: "Cart not found" });
  }

  cart.items = cart.items.filter(
    item => item.product.toString() !== productId
  );

  await cart.save();
  res.json({ message: "Item removed", cart });
};
