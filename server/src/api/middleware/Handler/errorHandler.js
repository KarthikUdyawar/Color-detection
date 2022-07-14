import HttpStatus from "../../utils/httpStatus.js";

const ErrorHandler = (error, res) => {
  const isSuccessful = error.isSuccessful || false;
  const status = error.status || HttpStatus.serverError;
  const message = error.message || "Server Error";
  const info = error.stack || "Something went wrong";
  res.status(status).send({
    isSuccessful,
    status,
    message,
    info,
  });
};

export default ErrorHandler;
