const mongoose = require("mongoose");
require("dotenv").config();
const Product = require("../models/product.model");

const products = [
  { name: "Floral A-Line Dress", category: "Women", price: 1995, image: "https://assets.ajio.com/medias/sys_master/root1/20250808/AJj7/689505238bfb9009ac6eabe6/-473Wx593H-700114234-blue-MODEL.jpg" },
  { name: "Silk Wrap Saree", category: "Women", price: 4250, image: "https://rushini.in/cdn/shop/files/1_8bc903cf-eadf-4926-b9ab-6f55fcd99329.jpg?v=1690039502" },
  { name: "Slim Fit Linen Shirt", category: "Men", price: 1750, image: "https://levi.in/cdn/shop/files/A13230110_01_Styleshot.jpg?v=1736856002" },
  { name: "Denim Dungarees", category: "Kids", price: 1595, image: "https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/H55385s.jpg" }
];

(async () => {
  await mongoose.connect(process.env.MONGO_URI);
  await Product.deleteMany();
  await Product.insertMany(products);
  console.log("Products seeded ✅");
  process.exit();
})();
