import { Router } from "express";

import communityController from "./community.controller.js";

import authenticate from "../../middleware/authenticate.middleware.js";
import validate from "../../middleware/validate.middleware.js";

import createCommunitySchema from "./validator/create-community.validator.js";
import updateCommunitySchema from "./validator/update-community.validator.js";

const router = Router();

// Public Routes
router.get("/", communityController.getAll);

router.get("/:slug", communityController.getBySlug);

// Protected Routes
router.post(
  "/",
  authenticate,
  validate(createCommunitySchema),
  communityController.create,
);

router.patch(
  "/:communityId",
  authenticate,
  validate(updateCommunitySchema),
  communityController.update,
);

router.delete("/:communityId", authenticate, communityController.archive);

export default router;
