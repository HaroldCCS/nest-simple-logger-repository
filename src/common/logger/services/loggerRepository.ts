abstract class LoggerRepository {
  constructor() {}

  abstract log(message: string): void;
  abstract warning(message: string): void;
  abstract error(error: Error, message: string): void;
}

export default LoggerRepository;
