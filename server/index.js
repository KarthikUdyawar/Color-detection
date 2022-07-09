import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import morgan from "morgan";

import router from "./routers/Data.routes.js";

const PORT = 4000;
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan("dev"));
app.use(cors());

app.get("/", (req, res) => {
  res.send("Server is working");
});

app.use("/api/v1", router);

app.listen(PORT, () => console.log(`Server started on post ${PORT}`));
