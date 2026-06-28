import AppError from "./AppError.js";
import { HTTP_STATUS } from "../constants/http-status.js";

export default class InternalServerError extends AppError {
  constructor(message = "Internal server error") {
    super(message, HTTP_STATUS.INTERNAL_SERVER_ERROR);
  }
}
