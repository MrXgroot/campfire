import * as communityService from "./community.service.js";
import HttpResponse from "../../shared/response/HttpResponse.js";

class CommunityController {
  async create(req, res, next) {
    try {
      const result = await communityService.create({
        ...req.body,
        ownerId: req.user.userId,
      });

      return HttpResponse.created(
        res,
        "Community created successfully.",
        result,
      );
    } catch (error) {
      next(error);
    }
  }

  async getAll(req, res, next) {
    try {
      const result = await communityService.getAll({
        limit: Number(req.query.limit),
        skip: Number(req.query.skip),
      });

      return HttpResponse.ok(res, "Communities fetched successfully.", result);
    } catch (error) {
      next(error);
    }
  }

  async getById(req, res, next) {
    try {
      const result = await communityService.getById(req.params.communityId);

      return HttpResponse.ok(res, "Community fetched successfully.", result);
    } catch (error) {
      next(error);
    }
  }

  async getBySlug(req, res, next) {
    try {
      const result = await communityService.getBySlug(req.params.slug);

      return HttpResponse.ok(res, "Community fetched successfully.", result);
    } catch (error) {
      next(error);
    }
  }

  async update(req, res, next) {
    try {
      const result = await communityService.update(
        req.params.communityId,
        req.body,
      );

      return HttpResponse.ok(res, "Community updated successfully.", result);
    } catch (error) {
      next(error);
    }
  }

  async archive(req, res, next) {
    try {
      const result = await communityService.archive(req.params.communityId);

      return HttpResponse.ok(res, "Community archived successfully.", result);
    } catch (error) {
      next(error);
    }
  }
}

export default new CommunityController();
