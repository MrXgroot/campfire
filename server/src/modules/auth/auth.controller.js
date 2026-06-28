import authService from "./auth.service.js";
import HttpResponse from "../../shared/response/HttpResponse.js";

class AuthController {
  async register(req, res, next) {
    try {
      console.log(req.body);
      const result = await authService.register(req.body);

      return HttpResponse.created(res, "Account created successfully.", result);
    } catch (error) {
      next(error);
    }
  }

  async login(req, res, next) {
    try {
      const result = await authService.login(req.body);

      return HttpResponse.ok(res, "Login successful.", result);
    } catch (error) {
      next(error);
    }
  }

  async me(req, res, next) {
    try {
      const result = await authService.me(req.user.userId);

      return HttpResponse.ok(res, "User fetched successfully.", result);
    } catch (error) {
      next(error);
    }
  }

  async logout(req, res, next) {
    try {
      await authService.logout();

      return HttpResponse.ok(res, "Logged out successfully.");
    } catch (error) {
      next(error);
    }
  }
}

export default new AuthController();
