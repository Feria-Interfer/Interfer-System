import Company from "./companies.model.js";

export const createCompany = async (req, res) => {
    try {
        const data = req.body;

        const company = new Company(data);

        await company.save();

        return res.status(201).json({
            success: true,
            message: "Company created",
            company
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error creating company",
            error: error.message
        });
    }
};

export const getCompanies = async (req, res) => {
    try {
        const companies = await Company.find();

        return res.json({
            success: true,
            total: companies.length,
            companies
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error getting companies",
            error: error.message
        });
    }
};

export const getCompanyById = async (req, res) => {
    try {
        const { id } = req.params;

        const company = await Company.findById(id);

        if (!company) {
            return res.status(404).json({
                success: false,
                message: "Company not found"
            });
        }

        return res.json({
            success: true,
            company
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error getting company",
            error: error.message
        });
    }
};

export const updateCompany = async (req, res) => {
    try {
        const { id } = req.params;

        const updateData = { ...req.body };

        const updatedCompany = await Company.findByIdAndUpdate(
            id,
            updateData,
            {   
                new: true,
                runValidators: true
            }
        );

        if (!updatedCompany) {
            return res.status(404).json({
                success: false,
                message: "Company not found"
            });
        }

        return res.json({
            success: true,
            message: "Company updated",
            updatedCompany
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error updating company",
            error: error.message
        });
    }
};

export const getCompaniesByCategory = async (req, res) => {
    try {
        const { category } = req.params;

        const companies = await Company.find({ category });

        return res.json({
            success: true,
            total: companies.length,
            companies
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error filtering companies by category",
            error: error.message
        });
    }
};

export const getCompaniesByImpact = async (req, res) => {
    try {
        const { impact } = req.params;

        const companies = await Company.find({ impactLevel: impact });

        return res.json({
            success: true,
            total: companies.length,
            companies
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error filtering companies by impact",
            error: error.message
        });
    }
};

export const getCompaniesByYears = async (req, res) => {
    try {
        const { years } = req.params;

        const companies = await Company.find({
            yearsTrajectory: { $gte: years }
        });

        return res.json({
            success: true,
            total: companies.length,
            companies
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error filtering companies by years",
            error: error.message
        });
    }
};

export const getCompaniesAZ = async (req, res) => {
    try {
        const companies = await Company.find().sort({ name: 1 });

        return res.json({
            success: true,
            companies
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error sorting companies",
            error: error.message
        });
    }
};

export const getCompaniesZA = async (req, res) => {
    try {
        const companies = await Company.find().sort({ name: -1 });

        return res.json({
            success: true,
            companies
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error sorting companies",
            error: error.message
        });
    }
};