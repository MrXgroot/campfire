import authRepository from "./auth.repository.js";

import PasswordService from "../../shared/auth/password.service.js";
import JwtService from "../../shared/auth/jwt.service.js";

import ConflictError from "../../shared/errors/ConflictError.js";
class AuthService {
  async register(userData) {
    const { username, email, password } = userData;
    const usernameExists = await authRepository.existsByUsername(username);

    if (usernameExists) {
      throw new ConflictError("Username already exists.");
    }

    const emailExists = await authRepository.existsByEmail(email);

    if (emailExists) {
      throw new ConflictError("Email already exists.");
    }

    const hashedPassword = await PasswordService.hash(password);

    const user = await authRepository.create({
      username,
      email,
      password: hashedPassword,
    });

    const accessToken = JwtService.generateAccessToken({
      userId: user._id,
    });

    return {
      user,
      accessToken,
    };
  }

  async login(credentials) {
    const { email, password } = credentials;

    const user = await authRepository.findByEmail(email);

    if (!user) {
      throw new UnauthorizedError("Invalid email or password.");
    }

    const isPasswordValid = await PasswordService.compare(
      password,
      user.password,
    );

    if (!isPasswordValid) {
      throw new UnauthorizedError("Invalid email or password.");
    }

    const accessToken = JwtService.generateAccessToken({
      userId: user._id,
    });

    return {
      user,
      accessToken,
    };
  }
  async me(userId) {}

  async logout() {}
}

export default new AuthService();
