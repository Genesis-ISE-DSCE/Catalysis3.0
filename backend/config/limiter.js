const { rateLimit } = require("express-rate-limit");

 const limiter = rateLimit({
  windowMs: 100 * 60 * 1000,
  limit: 4,
  standardHeaders: "draft-7",
  legacyHeaders: false,
});
module.exports = limiter;
