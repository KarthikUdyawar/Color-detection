import { Router } from "express";

import { getData } from "../controllers/getData.controller.js";
import { postData } from "../controllers/postData.controller.js";
import { predictData } from "../controllers/predictData.controller.js";

const router = Router();

router.route("/download").get(getData);
router.route("/postData").post(postData);
router.route("/predictData").get(predictData);

export default router;
