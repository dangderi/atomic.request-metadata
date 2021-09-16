import log4js from "./utils/default.logger";
import * as dotenv from "dotenv";
dotenv.config();

import errorHandler from "errorhandler";
import app from "./app";

/**
 * Error Handler. Provides full stack
 */
if (process.env.NODE_ENV === "development") {
    app.use(errorHandler());
}
const logger = log4js.getLogger("app");
/**
 * Start Express server.
 */
const server = app.listen(app.get("port"), () => {
  logger.info("Server started at http://localhost:%d", app.get("port"));
  logger.info("Log level is %s", logger.level);
  logger.info("Press CTRL-C to stop\n");
});

export default server;
