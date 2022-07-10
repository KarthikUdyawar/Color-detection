import express from "express";

import { getData } from "../controllers/getData.js";
import { postData } from "../controllers/postData.js";

const router = express.Router();

router.route("/download").get(getData);
router.route("/postData").post(postData);

export default router;
