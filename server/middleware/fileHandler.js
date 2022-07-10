import { writeFileSync, appendFileSync } from "fs";

import DIR_PATH from "../utils/getDataPath.js";

const CSV_HEADER = "Red,Green,Blue,Output\n";

const fileHandler = async (mode, data) => {
  if (mode === "w") {
    writeFileSync(DIR_PATH, CSV_HEADER, (err) => {
      if (err) throw err;
    });
  } else if (mode === "a") {
    appendFileSync(DIR_PATH, data, (err) => {
      if (err) throw err;
    });
  } else return "Error: Mode parameter is not declared";
};

export default fileHandler;
