import { ZodError } from "zod";
import ValidationError from "../shared/errors/ValidationError.js";

const validate = (schema) => {
  return (req, res, next) => {
    try {
      req.body = schema.parse(req.body);
      next();
    } catch (error) {
      if (error instanceof ZodError) {
        throw new ValidationError(
          error.issues[0]?.message || "Validation failed.",
        );
      }

      next(error);
    }
  };
};

export default validate;
