import { rateLimit } from "express-rate-limit";

export const limiter = rateLimit({
  windowMs: 100 * 60 * 1000,
  limit: 4,
  standardHeaders: "draft-7",
  legacyHeaders: false,
});