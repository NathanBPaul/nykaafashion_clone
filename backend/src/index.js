const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db.js");
const authRoutes = require("./routes/auth.routes.js");
const productRoutes = require("./routes/product.routes.js");
const cartRoutes = require("./routes/cart.routes.js");


const app = express(); // ✅ app MUST be created before use

// middleware
app.use(cors());
app.use(express.json());

// routes
app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);
app.use("/api/cart", cartRoutes);


// start server AFTER DB connection
const startServer = async () => {
  await connectDB();
  app.listen(process.env.PORT || 5050, () => {
    console.log("Server started on port", process.env.PORT || 5050);
  });
};

startServer();
