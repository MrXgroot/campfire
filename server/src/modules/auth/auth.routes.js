import { Router } from "express";

import authController from "./auth.controller.js";

import validate from "../../middleware/validate.middleware.js";

import registerSchema from "./validators/register.validator.js";
import loginSchema from "./validators/login.validator.js";

const router = Router();

router.post("/register", validate(registerSchema), authController.register);

router.post("/login", validate(loginSchema), authController.login);

router.get("/me", authController.me);

router.post("/logout", authController.logout);

export default router;
