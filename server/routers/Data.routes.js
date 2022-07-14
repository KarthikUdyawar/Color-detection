import { Router } from "express";

import { getData } from "../controllers/getData.js";
import { postData } from "../controllers/postData.js";
import { predictData } from "../controllers/predictData.js";

const router = Router();

router.route("/download").get(getData);
router.route("/postData").post(postData);
router.route("/predictData").get(predictData);

export default router;
