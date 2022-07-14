import ErrorHandler from "../middleware/Handler/errorHandler.js";
import fileHandler from "../middleware/Handler/fileHandler.js";
import HttpStatus from "../utils/httpStatus.js";

export const postData = async (req, res) => {
  try {
    fileHandler("w");
    const { data } = req.body;
    let csvData;

    for (let i = 0; i < data.length; i++) {
      const RInputData = data[i].input.color.r;
      const GInputData = data[i].input.color.g;
      const BInputData = data[i].input.color.b;
      const outputData = data[i].output;
      csvData = `${RInputData},${GInputData},${BInputData},${outputData}\n`;
      fileHandler("a", csvData);
    }
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
