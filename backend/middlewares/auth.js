var jwt = require("jsonwebtoken");

const auth = async (req, res, next) => {
  const token = req.headers.authorization;
  if (token) {
    const decoded = await jwt.verify(token, "raj");
    if (decoded) {
      const userId = decoded.userId;
      req.userDetails = decoded;
      console.log(decoded);
      req.body.userId = userId;
      next();
    } else {
      res.send({ msg: "please login" });
    }
  } else {
    res.send({ msg: "please login" });
  }
};

module.exports = {
  auth,
};
