import fs from "fs";

import DIR_PATH from "../utils/getDataPath.js";

const CSV_HEADER = "Red,Green,Blue,Output\n";

function fileHandler(mode, data) {
  if (mode === "w") {
    fs.writeFileSync(DIR_PATH, CSV_HEADER, function (err) {
      if (err) throw err;
    });
  } else if (mode === "a") {
    fs.appendFileSync(DIR_PATH, data, function (err) {
      if (err) throw err;
    });
  } else return "Error: Mode parameter is not declared";
}

export default fileHandler;
