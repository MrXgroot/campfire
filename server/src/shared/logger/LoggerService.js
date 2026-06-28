class Logger {
  info(message, data = null) {
    console.log(`[INFO] ${message}`, data ?? "");
  }

  warn(message, data = null) {
    console.warn(`[WARN] ${message}`, data ?? "");
  }

  error(message, error = null) {
    console.error(`[ERROR] ${message}`, error ?? "");
  }
}

export default new Logger();
