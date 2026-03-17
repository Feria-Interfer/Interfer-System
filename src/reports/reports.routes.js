import { Router } from "express";

import { generateExcelReport, reportInfo } from "./reports.controller.js";
import { validateJWT } from "../../middlewares/validate-JWT.js";

const router = Router();

router.get("/report", validateJWT, generateExcelReport);
router.get("/info", validateJWT, reportInfo);

export default router;