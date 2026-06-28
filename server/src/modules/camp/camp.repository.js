import Camp from "./models/camp.model.js";

class CampRepository {
  async create(campData) {
    return Camp.create(campData);
  }

  async findById(campId) {
    return Camp.findById(campId);
  }

  async findBySlug(slug) {
    return Camp.findOne({ slug });
  }

  async findAll(filter = {}, options = {}) {
    const { sort = { createdAt: -1 }, limit = 20, skip = 0 } = options;

    return Camp.find(filter).sort(sort).skip(skip).limit(limit);
  }

  async updateById(campId, updateData) {
    return Camp.findByIdAndUpdate(campId, updateData, {
      new: true,
      runValidators: true,
    });
  }

  async deleteById(campId) {
    return Camp.findByIdAndDelete(campId);
  }
}

export default new CampRepository();
