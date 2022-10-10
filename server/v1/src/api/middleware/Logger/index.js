import logger from "../../utils/logger.js";
import morgan from "morgan";
import config from "../../../config/index.js";

const stream = {
  write: (message) => {
    logger.http(message);
  },
};

const skip = () => {
  const env = config.NODE_ENV || "development";
  return env !== "development";
};

morgan.token("splitter", (req) => {
  return "\x1b[36m--------------------------------------------\x1b[0m\n";
});

morgan.token("statusColor", (req, res, args) => {
  // get the status code if response written
  var status = (
    typeof res.headersSent !== "boolean" ? Boolean(res.header) : res.headersSent
  )
    ? res.statusCode
    : undefined;

  // get status color
  var color =
    status >= 500
      ? 31 // red
      : status >= 400
      ? 33 // yellow
      : status >= 300
      ? 36 // cyan
      : status >= 200
      ? 32 // green
      : 0; // no color

  return "\x1b[" + color + "m" + status + "\x1b[0m";
});

const morganMiddleware = morgan(
  `:splitter\x1b[33m:method\x1b[0m \x1b[36m:url\x1b[0m :statusColor :response-time ms - length|:res[content-length]`,
  { stream, skip }
);

export default morganMiddleware;
