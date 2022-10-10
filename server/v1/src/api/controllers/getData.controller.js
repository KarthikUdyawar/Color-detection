import { CSV_PATH } from "../utils/getPath.js";
import HttpStatus from "../utils/httpStatus.js";
import ErrorHandler from "../middleware/Handler/errorHandler.js";

export const getData = async (req, res) => {
  try {
    await res.status(HttpStatus.OK).download(CSV_PATH);
  } catch (error) {
    ErrorHandler(error, res);
  }
};
