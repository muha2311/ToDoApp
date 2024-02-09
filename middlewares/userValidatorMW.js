const validator = require("../util/userValidator");

module.exports = (req, res, next) => {
  let valid = validator(req.body);
  if (valid) {
    next();
  } else {
    res.status(403).json({ error: "Forbidden Command.. userValidatorMW" });
  }
};
