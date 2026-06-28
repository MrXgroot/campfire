import { HTTP_STATUS } from "../constants/http-status.js";

class HttpResponse {
  static send(res, status, message, data = {}, meta = {}) {
    return res.status(status).json({
      message,
      data,
      meta,
    });
  }

  static ok(res, message, data = {}, meta = {}) {
    return this.send(res, HTTP_STATUS.OK, message, data, meta);
  }

  static created(res, message, data = {}, meta = {}) {
    return this.send(res, HTTP_STATUS.CREATED, message, data, meta);
  }
}

export default HttpResponse;
