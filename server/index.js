// Imports
import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import morgan from "morgan";

import router from "./routers/Data.routes.js";

// Config
const PORT = 4000;
const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan("dev"));
app.use(cors());

// Test API to check API is running
app.get("/", (req, res) => {
  res.send("Server is working");
});

// Routers
app.use("/api/v1", router);

// Listen server
app.listen(PORT, () => console.log(`Server started on post ${PORT}`));
