const jwt = require("jsonwebtoken");

const generateJwt = (user) => {
  return jwt.sign(
    {
      id: user._id,
      username: user.username
    },
    process.env.JWT_SECRET,
    { expiresIn: "7d" }
  );
};

module.exports = generateJwt;
