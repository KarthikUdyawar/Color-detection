import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import morgan from "morgan";

const PORT = 4000;
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan("dev"));
app.use(cors());

app.get("/", (req, res) => {
  res.send("Server is working");
});

app.listen(PORT, () => console.log(`Server started on post ${PORT}`));
