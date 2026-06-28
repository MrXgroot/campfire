import AppError from "./AppError.js";
import { HTTP_STATUS } from "../constants/http-status.js";

export default class ValidationError extends AppError {
  constructor(message = "Validation failed") {
    super(message, HTTP_STATUS.BAD_REQUEST);
  }
}
