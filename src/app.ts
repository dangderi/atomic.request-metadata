import express from "express";
import lusca from "lusca";
import helmet from "helmet";
import * as apiController from "./controllers/api";
import swaggerUi from "swagger-ui-express";
import YAML from "yamljs";
import log4js from "./utils/default.logger";

// Create Express server
const app = express();

// Express configuration
app.set("port", process.env.PORT || 3000);
app.use(log4js.connectLogger(log4js.getLogger("http"), { level: "auto" }));
app.use(lusca.xssProtection(true));
app.use(helmet.hidePoweredBy());

app.use(express.json({limit: "10mb"}));

/**
 * API routes.
 */
app.get("/note-types", apiController.getNoteTypes);
app.get("/note-cat-depts", apiController.getPolicyDepartments);
app.get("/enquiries", apiController.getEnquiries);
app.get("/note-categories", apiController.getNoteCategories);
app.get("/wrapup-codes", apiController.getWrapUpCodes);
app.get("/departments", apiController.getDepartments);
app.get("/sec-users", apiController.getSecUsers);
app.get("/request-types", apiController.getRequestTypes);
app.get("/request-histories", apiController.getRequestHistories);
app.get("/request-statuses", apiController.getRequestStatuses);
app.get("/priorities", apiController.getPriorities);
app.get("/formats", apiController.getFormats);
app.get("/resolutions", apiController.getResolutions);
app.get("/additionalinfo", apiController.getAdditionalInfo);
app.get("/health-check", apiController.healthCheck);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(YAML.load("./openapi.yaml")));

export default app;
