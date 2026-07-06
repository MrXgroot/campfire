import slugify from "slugify";

import campRepository from "./camp.repository.js";

import ConflictError from "../../shared/errors/ConflictError.js";
import NotFoundError from "../../shared/errors/NotFoundError.js";

class CampService {
  async create(campData) {
    const slug = slugify(campData.title, {
      lower: true,
      strict: true,
      trim: true,
    });

    const existingCamp = await campRepository.findBySlug(slug);

    if (existingCamp) {
      throw new ConflictError("A camp with this title already exists.");
    }

    const camp = await campRepository.create({
      ...campData,
      slug,
    });

    return {
      camp,
    };
  }

  async getById(campId) {
    const camp = await campRepository.findById(campId);

    if (!camp) {
      throw new NotFoundError("Camp not found.");
    }

    return {
      camp,
    };
  }

  async getBySlug(slug) {
    const camp = await campRepository.findBySlug(slug);

    if (!camp) {
      throw new NotFoundError("Camp not found.");
    }

    return {
      ...camp.toObject(),
      author: camp.authorId,
      community: camp.communityId,
      authorId: undefined,
      communityId: undefined,
    };
  }

  async getAll(options) {
    const camps = await campRepository.findAll({}, options);

    return {
      camps: camps.map((camp) => ({
        ...camp.toObject(),

        author: camp.authorId,
        community: camp.communityId,

        authorId: undefined,
        communityId: undefined,
      })),
    };
  }

  async update(campId, updateData) {
    const camp = await campRepository.updateById(campId, updateData);

    if (!camp) {
      throw new NotFoundError("Camp not found.");
    }

    return {
      camp,
    };
  }

  async archive(campId) {
    const camp = await campRepository.archiveById(campId);

    if (!camp) {
      throw new NotFoundError("Camp not found.");
    }

    return {
      camp,
    };
  }
}

export default new CampService();
