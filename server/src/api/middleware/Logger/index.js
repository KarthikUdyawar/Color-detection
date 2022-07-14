import logger from "../../utils/logger.js";
import morgan from "morgan";
import config from "../../../config/index.js";

const stream = {
  write: (message) => logger.http(message),
};

const skip = () => {
  const env = config.NODE_ENV || "development";
  return env !== "development";
};

const morganMiddleware = morgan(
  ":remote-addr :method :url :status :res[content-length] - :response-time ms",
  { stream, skip }
);

export default morganMiddleware;
