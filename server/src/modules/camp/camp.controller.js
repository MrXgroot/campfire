import campService from "./camp.service.js";
import HttpResponse from "../../shared/response/HttpResponse.js";

class CampController {
  async create(req, res, next) {
    try {
      const result = await campService.create({
        ...req.body,
        authorId: req.user.userId,
      });

      return HttpResponse.created(res, "Camp created successfully.", result);
    } catch (error) {
      next(error);
    }
  }

  async getAll(req, res, next) {
    try {
      const result = await campService.getAll({
        limit: Number(req.query.limit),
        skip: Number(req.query.skip),
      });

      console.log(result);

      return HttpResponse.ok(res, "Camps fetched successfully.", result);
    } catch (error) {
      next(error);
    }
  }

  async getById(req, res, next) {
    try {
      const result = await campService.getById(req.params.campId);

      return HttpResponse.ok(res, "Camp fetched successfully.", result);
    } catch (error) {
      next(error);
    }
  }

  async getBySlug(req, res, next) {
    try {
      const result = await campService.getBySlug(req.params.slug);
      return HttpResponse.ok(res, "Camp fetched successfully.", result);
    } catch (error) {
      next(error);
    }
  }

  async update(req, res, next) {
    try {
      const result = await campService.update(req.params.campId, req.body);

      return HttpResponse.ok(res, "Camp updated successfully.", result);
    } catch (error) {
      next(error);
    }
  }

  async archive(req, res, next) {
    try {
      const result = await campService.archive(req.params.campId);

      return HttpResponse.ok(res, "Camp archived successfully.", result);
    } catch (error) {
      next(error);
    }
  }
}

export default new CampController();
