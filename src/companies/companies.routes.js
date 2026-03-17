import { Router } from "express";

import { createCompany, getCompanies, getCompanyById, updateCompany, getCompaniesByCategory, getCompaniesByImpact, 
    getCompaniesByYears, getCompaniesAZ, getCompaniesZA } from "../controllers/company.controller.js";

const router = Router();


router.post("/create", createCompany);

router.get("/", getCompanies);

router.get("/:id", getCompanyById);

router.put("/update/:id", updateCompany);

router.get("/category/:category", getCompaniesByCategory);
router.get("/impact/:impact", getCompaniesByImpact);
router.get("/trajectory/:years", getCompaniesByYears);

router.get("/sort/az", getCompaniesAZ);
router.get("/sort/za", getCompaniesZA);


export default router;