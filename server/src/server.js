import app from "./app.js";

import env from "./config/env.js";

import { connectDatabase } from "./config/db.js";

import LoggerService from "./shared/logger/LoggerService.js";

async function bootstrap() {
  await connectDatabase();

  app.listen(env.PORT, () => {
    LoggerService.info(`Server running on http://localhost:${env.PORT}`);
  });
}

bootstrap();
