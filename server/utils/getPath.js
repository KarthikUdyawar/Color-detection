import path from "path";

const __dirname = path.resolve();
const CSV_PATH = path.join(__dirname, "/database/ColorData.csv");
const PY_PATH = path.join(__dirname, "/database/predictData.py");

export { CSV_PATH, PY_PATH };
