import { Router } from "express";

import { createCompany, getCompanies, getCompanyById, updateCompany, getCompaniesByCategory, getCompaniesByImpact, 
    getCompaniesByYears, getCompaniesAZ, getCompaniesZA } from "./companies.controller.js";

import { validateJWT } from "../../middlewares/validate-JWT.js";

const router = Router();

router.post("/create", validateJWT, createCompany);

router.get("/", validateJWT, getCompanies);

router.get("/:id", validateJWT, getCompanyById);

router.put("/update/:id", validateJWT, updateCompany);

router.get("/category/:category", validateJWT, getCompaniesByCategory);
router.get("/impact/:impact", validateJWT, getCompaniesByImpact);
router.get("/trajectory/:years", validateJWT, getCompaniesByYears);

router.get("/sort/az", validateJWT, getCompaniesAZ);
router.get("/sort/za", validateJWT, getCompaniesZA);

export default router;