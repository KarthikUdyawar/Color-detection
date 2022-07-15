// Imports
import bodyParser from "body-parser";
import express from "express";
import { Helmet, Cors } from "./api/middleware/Header/index.js";
import router from "./api/routers/Data.routes.js";
import config from "./config/index.js";
import morganMiddleware from "./api/middleware/Logger/index.js";
import { speedLimiter, limiter } from "./api/middleware/Limiter/index.js";
import logger from "./api/utils/logger.js";

// Config
const PORT = config.PORT;
const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morganMiddleware);
app.use(Helmet);
app.use(Cors);
app.use(speedLimiter);
app.use(limiter);

// Test API to check API is running
app.get("/", (req, res) => {
  res.send("Server is working");
});

// Routers
app.use("/api/v1", router);

// Listen server
app.listen(PORT, () => logger.info(`Server started on post ${PORT}`));
