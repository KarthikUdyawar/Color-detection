import { writeFileSync, appendFileSync } from "fs";

import { CSV_PATH } from "../utils/getPath.js";

const CSV_HEADER = "Red,Green,Blue,Output\n";

const fileHandler = async (mode, data) => {
  if (mode === "w") {
    writeFileSync(CSV_PATH, CSV_HEADER, (err) => {
      if (err) throw err;
    });
  } else if (mode === "a") {
    appendFileSync(CSV_PATH, data, (err) => {
      if (err) throw err;
    });
  } else return "Error: Mode parameter is not declared";
};

export default fileHandler;
