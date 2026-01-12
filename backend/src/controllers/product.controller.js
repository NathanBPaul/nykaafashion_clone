const Product = require("../models/product.model");

// GET all products (optionally by category)
exports.getProducts = async (req, res) => {
  const { category } = req.query;

  const filter = category && category !== "All"
    ? { category }
    : {};

  const products = await Product.find(filter);
  res.json(products);
};

// GET single product
exports.getProductById = async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }
  res.json(product);
};
