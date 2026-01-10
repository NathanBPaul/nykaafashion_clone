const User = require("../models/user.model.js");
const generateJwt = require("../utils/generate.jwt.js");
const { hashPassword, hashCompare } = require("../utils/hash.bcrypt.js");

exports.registerAuth = async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return res.status(409).json({ message: "Email already exists" });
  }

  const hashedPassword = await hashPassword(password);

  await User.create({
    username,
    email,
    password: hashedPassword
  });

  res.status(201).json({
    success: true,
    message: "User registered successfully"
  });
};

exports.loginAuth = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Email and password required" });
  }

  const user = await User.findOne({ email }).select("+password");
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  const isMatch = await hashCompare(password, user.password);
  if (!isMatch) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  const token = generateJwt(user);

  res.json({
    success: true,
    token,
    user: {
      id: user._id,
      username: user.username,
      email: user.email
    }
  });
};
