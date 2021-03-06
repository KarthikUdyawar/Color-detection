import child_process from "child_process";
import ErrorHandler from "../middleware/Handler/errorHandler.js";
import HttpStatus from "../utils/httpStatus.js";
import { PY_PATH } from "../utils/getPath.js";
import { predictDataValidation } from "../middleware/Validator/index.js";

export const predictData = async (req, res) => {
  try {
    const { r, g, b } = req.query;
    const isValid = predictDataValidation(r, g, b);

    if (!isValid) {
      res.status(HttpStatus.notAcceptable).json({
        isSuccessful: false,
        status: HttpStatus.notAcceptable,
        message: "Data is not acceptable",
        info: data,
      });
      return false;
    }

    let spawn = child_process.spawn;
    let pyPro = spawn(
      "python",
      [PY_PATH, req.query.r, req.query.g, req.query.b],
      {
        detached: true,
      }
    );
    pyPro.stdout.on("data", (data) => {
      res.status(HttpStatus.OK).json({
        isSuccessful: true,
        status: HttpStatus.OK,
        message: "Data predicted successfully",
        info: { output: parseInt(data.toString()[0]) },
      });
    });
    pyPro.stderr.on("data", (err) => {
      ErrorHandler(err, res);
    });
  } catch (error) {
    ErrorHandler(error, res);
  }
};
