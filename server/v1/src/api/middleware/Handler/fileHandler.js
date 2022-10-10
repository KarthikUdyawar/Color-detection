import { writeFileSync, appendFileSync } from "fs";

import { CSV_PATH } from "../../utils/getPath.js";

const fileHandler = async (data) => {
  appendFileSync(CSV_PATH, data, (err) => {
    if (err) throw err;
  });
};

export default fileHandler;
