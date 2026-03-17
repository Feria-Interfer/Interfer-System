import ExcelJS from "exceljs";
import Company from "../companies/companies.model.js";

export const generateExcelReport = async (req, res) => {
    try {
        const companies = await Company.find();

        const workbook = new ExcelJS.Workbook();
        const worksheet = workbook.addWorksheet("Companies");

        worksheet.columns = [
            { header: "Nombre", key: "name", width: 25},
            { header: "Categoría", key: "category", width: 20 },
            { header: "Impacto", key: "impactLevel", width: 15 },
            { header: "Años Trayectoria", key: "yearsTrajectory", width: 20 },
            { header: "Correo", key: "contactEmail", width: 30 },
            { header: "Teléfono", key: "contactPhone", width: 20 }
        ];

        companies.forEach(company => {
            worksheet.addRow({
                name: company.name,
                category: company.category,
                impactLevel: company.impactLevel,
                yearsTrajectory: company.yearsTrajectory,
                contactEmail: company.contactEmail,
                contactPhone: company.contactPhone
            });
        });

        worksheet.getRow(1).font = { bold: true };

        worksheet.getRow(1).eachCell(cell => {
            cell.fill = {
                type: "pattern",
                pattern: "solid",
                fgColor: { argb: "FFFF00" } // amarillo
            };
        });

        res.setHeader(
            "Content-Type",
            "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
        );

        res.setHeader(
            "Content-Disposition",
            "attachment; filename=companies.xlsx"
        );

        await workbook.xlsx.write(res);

        res.end();

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error generating Excel report",
            error: error
        });
    }
};

export const reportInfo = (req, res) => {
    return res.json({
        success: true,
        message: "Para descargar el reporte en Excel usa el endpoint Generate Report. Cuando el estado de salga OK(200)"
        + " Ve a la opción Save Response, a la par hay 3 puntos haz click y selecciona Save as File, elige la ubicación y" 
        + " el nombre del archivo con extensión .xlsx y listo, tendrás tu reporte en Excel. Ahora solo queda abrirlo desde Excel."
    });
};