const express = require("express");
const cors = require("cors");
require("dotenv").config();

const authRouter = require("./routes/auth.routes.js");
const connectDB = require("./config/db.js");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRouter);

// IMPORTANT: start server ONLY after DB connects
const startServer = async () => {
  await connectDB();
  app.listen(process.env.PORT || 5050, () => {
    console.log("Server started on port", process.env.PORT || 5050);
  });
};

startServer();
