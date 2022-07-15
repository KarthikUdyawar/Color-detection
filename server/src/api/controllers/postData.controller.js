import ErrorHandler from "../middleware/Handler/errorHandler.js";
import fileHandler from "../middleware/Handler/fileHandler.js";
import { postDataValidation } from "../middleware/Validator/index.js";
import HttpStatus from "../utils/httpStatus.js";

export const postData = async (req, res) => {
  try {
    fileHandler("w");
    const { data } = req.body;
    const isValid = postDataValidation(data);

      fileHandler("a", csvData);
    if (!isValid) {
      res.status(HttpStatus.notAcceptable).json({
        isSuccessful: false,
        status: HttpStatus.notAcceptable,
        message: "Data is not acceptable",
        info: data,
      });
      return false;
    }

    let csvData;
    const RInputData = data.input.r;
    const GInputData = data.input.g;
    const BInputData = data.input.b;
    const outputData = data.output;
    csvData = `${RInputData},${GInputData},${BInputData},${outputData}\n`;
    res.status(HttpStatus.OK).json({
      isSuccessful: true,
      status: HttpStatus.OK,
      message: "Data posted successfully",
      info: data,
    });
  } catch (error) {
    ErrorHandler(error, res);
  }
};
