import slowDown from "express-slow-down";
import rateLimit from "express-rate-limit";

const speedLimiter = slowDown({
  windowMs: 5 * 60 * 1000, // 5 minutes
  delayAfter: 20, // allow 20 requests per 5 minutes, then...
  delayMs: 500, // begin adding 500ms of delay per request above 100:
  // request # 21 is delayed by  500ms
  // request # 22 is delayed by 1000ms
  // request # 23 is delayed by 1500ms
  // etc.
});

const limiter = rateLimit({
  windowMs: 5 * 60 * 1000, // 5 minutes
  max: 30, // Limit each IP to 30 requests per `window` (here, per 5 minutes)
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});

export { speedLimiter, limiter };
