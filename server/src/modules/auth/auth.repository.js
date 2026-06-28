// auth.repository.js

import User from "./models/user.model.js";

class AuthRepository {
  async create(userData) {
    return User.create(userData);
  }

  async findByEmail(email) {
    return User.findOne({ email }).select("+password");
  }

  async findByUsername(username) {
    return User.findOne({ username });
  }

  async findById(id) {
    return User.findById(id);
  }

  async existsByEmail(email) {
    return User.exists({ email });
  }

  async existsByUsername(username) {
    return User.exists({ username });
  }
}

export default new AuthRepository();
