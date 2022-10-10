import dotenv from "dotenv";
import { ENV_PATH } from "../api/utils/getPath.js";

dotenv.config({ path: ENV_PATH });

const config = {
  NODE_ENV: process.env.NODE_ENV ?? "production",
  PORT: process.env.PORT ?? "5000",
};

export default config;
