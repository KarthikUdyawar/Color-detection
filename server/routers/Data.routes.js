import express from "express";
import { postData } from "../controllers/postData.js";

const router = express.Router();

router.route("/postData").post(postData);

export default router;
