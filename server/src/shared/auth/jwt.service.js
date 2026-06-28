import jwt from "jsonwebtoken";

class JwtService {
  generateAccessToken(payload) {
    return jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });
  }

  verifyAccessToken(token) {
    return jwt.verify(token, process.env.JWT_SECRET);
  }

  decode(token) {
    return jwt.decode(token);
  }
}

export default new JwtService();
