const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../../config");

const authenticateJwt = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer")) {
    return res.status(403).json({ error: "Unauthorized" }); // Return here to avoid further execution
  }

  const token = authHeader.split(" ")[1];
  // console.log("found it");

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(400).send("Invalid token");
  }
};

const authorizeRole = (role) => {
  return (req, res, next) => {
    if (req.user.role !== role) {
      return res.status(403).send("Access denied.");
    }
    next();
  };
};

module.exports = { authenticateJwt, authorizeRole };
