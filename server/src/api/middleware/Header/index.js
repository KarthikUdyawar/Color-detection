import cors from "cors";
import helmet from "helmet";

const API_URL = "http://localhost:3000";

const options = {
  allowedHeaders: [
    "Origin",
    "X-Requested-With",
    "Content-Type",
    "Accept",
    "X-Access-Token",
  ],
  credentials: true,
  methods: "GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE",
  origin: API_URL,
  preflightContinue: false,
};

const Cors = cors(options);

const Helmet = helmet();

export { Helmet, Cors };
