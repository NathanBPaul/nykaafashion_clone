const Wishlist = require("../models/wishlist.model");
const Product = require("../models/product.model");

// GET wishlist
exports.getWishlist = async (req, res) => {
  const wishlist = await Wishlist.findOne({ user: req.userId })
    .populate("products");

  if (!wishlist) {
    return res.json({ products: [] });
  }

  res.json(wishlist);
};

// ADD to wishlist
exports.addToWishlist = async (req, res) => {
  const { productId } = req.body;

  const product = await Product.findById(productId);
  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }

  let wishlist = await Wishlist.findOne({ user: req.userId });

  if (!wishlist) {
    wishlist = new Wishlist({
      user: req.userId,
      products: [productId]
    });
  } else {
    const alreadyExists = wishlist.products.includes(productId);
    if (!alreadyExists) {
      wishlist.products.push(productId);
    }
  }

  await wishlist.save();
  res.json({ message: "Added to wishlist", wishlist });
};

// REMOVE from wishlist
exports.removeFromWishlist = async (req, res) => {
  const { productId } = req.params;

  const wishlist = await Wishlist.findOne({ user: req.userId });

  if (!wishlist) {
    return res.status(404).json({ message: "Wishlist not found" });
  }

  wishlist.products = wishlist.products.filter(
    id => id.toString() !== productId
  );

  await wishlist.save();
  res.json({ message: "Removed from wishlist", wishlist });
};
