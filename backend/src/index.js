const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db.js");
const authRoutes = require("./routes/auth.routes.js");
const productRoutes = require("./routes/product.routes.js");
const cartRoutes = require("./routes/cart.routes.js");
const wishlistRoutes = require("./routes/wishlist.routes.js");
const checkoutRoutes = require("./routes/checkout.routes.js");


const app = express(); 

// middleware
app.use(cors());
app.use(express.json());

// routes
app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/wishlist", wishlistRoutes);
app.use("/api/checkout", checkoutRoutes);

// start server AFTER DB connection
const startServer = async () => {
  await connectDB();
  app.listen(process.env.PORT || 5050, () => {
    console.log("Server started on port", process.env.PORT || 5050);
  });
};

startServer();
