const jwt = require("jsonwebtoken");

const authenticateToken = async (req, res, next) => {
  try {
    const authHeader = req.headers["access-token"];
    const token = authHeader;
    console.log(token);
    if (token == null) return res.sendStatus(401);
    try {
      jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    } catch (err) {
      res.sendStatus(403);
    }
    next();
  } catch (err) {
    res.sendStatus(500);
  }
};

module.exports = {
  authenticateToken,
};
