import path from "path";

const __dirname = path.resolve();

const CSV_PATH = path.join(__dirname, "src/config/database/ColorData.csv");
const PY_PATH = path.join(__dirname, "src/config/database/predictData.py");
const ENV_PATH = path.join(__dirname, "src/.env");

export { CSV_PATH, PY_PATH, ENV_PATH };
