import { Router } from "express";

import campController from "./camp.controller.js";

import validate from "../../middleware/validate.middleware.js";
import authenticate from "../../middleware/authenticate.middleware.js";

import createCampSchema from "./validator/create-camp.validator.js";
import updateCampSchema from "./validator/update-camp.validator.js";

const router = Router();

// Public Routes
router.get("/", campController.getAll);

router.get("/:slug", campController.getBySlug);

// Protected Routes
router.post(
  "/",
  authenticate,
  validate(createCampSchema),
  campController.create,
);

router.patch(
  "/:campId",
  authenticate,
  validate(updateCampSchema),
  campController.update,
);

router.delete("/:campId", authenticate, campController.archive);

export default router;
