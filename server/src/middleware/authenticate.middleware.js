import JwtService from "../shared/auth/jwt.service.js";

import UnauthorizedError from "../shared/errors/UnauthorizedError.js";

const authenticate = (req, res, next) => {
  try {
    const authorization = req.headers.authorization;

    if (!authorization) {
      throw new UnauthorizedError("Authentication required.");
    }

    const [scheme, token] = authorization.split(" ");

    if (scheme !== "Bearer" || !token) {
      throw new UnauthorizedError("Invalid authorization header.");
    }

    const payload = JwtService.verifyAccessToken(token);

    req.user = payload;

    next();
  } catch (error) {
    next(error);
  }
};

export default authenticate;
