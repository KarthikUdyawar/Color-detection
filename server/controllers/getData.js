import DIR_PATH from "../utils/getDataPath.js";
import ErrorHandler from "../middleware/errorHandler.js";
import HttpStatus from "../utils/httpStatus.js";

export const getData = async (req, res) => {
  try {
    res.status(HttpStatus.OK).download(DIR_PATH);
  } catch (error) {
    ErrorHandler(error, res);
  }
};
