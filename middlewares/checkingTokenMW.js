const jwt = require("jsonwebtoken");
const secretData = require("../config/custom-environment-variables.json");
module.exports = (req, res, next) => {
  try {
    let token = req.header("x-authentication-token");
    if (!token) {
      res.status(401).send("Access Denied.. There is no token");
    }
    const decodedToken = jwt.verify(token, secretData.jwtSecret);
    if (!decodedToken.userId) {
      return res.status(401).send("Access Denied.. You are not signed in");
    }
    req.userId = decodedToken.userId;
    next();
  } catch (err) {
    console.log(err);
    res.send("Invalid Token");
  }
};
