'use strict'

import mongoose from "mongoose";

const companySchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Company name is required"]
        },
        category: {
            type: String,
            required: [true, "Category is required"]
        },
        impactLevel: {
            type: String,
            required: true,
            enum: {
                values: ["Bajo", "Medio", "Alto"],
                message: "Impact level must be 'Bajo', 'Medio', or 'Alto'"
            }
        },
        yearsTrajectory: {
            type: Number,
            required: true,
            min: 0
        },
        contactEmail: {
            type: String,
            required: true
        },
        contactPhone: {
            type: String
        },
        isActive: {
            type: Boolean,
            default: true
        }
    },
    {
        timestamps: true
    }
);

companySchema.index({ isActive: 1 });
companySchema.index({ impactLevel: 1 });
companySchema.index({ isActive: 1, impactLevel: 1 });

export default mongoose.model('Company', companySchema);