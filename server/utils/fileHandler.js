import fs from "fs";
import path from "path";

const __dirname = path.resolve();
const DIR_PATH = path.join(__dirname, "/database/ColorData.csv");
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
