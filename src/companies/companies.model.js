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
                values: ["BAJO", "MEDIO", "ALTO"],
                message: "Impact level must be 'BAJO', 'MEDIO', or 'ALTO'"
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
        }
    },
    {
        timestamps: true
    }
);

companySchema.index({ impactLevel: 1 });

export default mongoose.model('Company', companySchema);