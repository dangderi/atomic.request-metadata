import log4js from "log4js";

// appenders
log4js.configure({
  appenders: {
    console: {
      type: "stdout",
      layout: {
        type: "colored",
      },
    },
  },
  categories: {
    default: { appenders: ["console"], level: process.env.LOG_LEVEL || "DEBUG" },
  },
});

// fetch logger and export
export default log4js;
