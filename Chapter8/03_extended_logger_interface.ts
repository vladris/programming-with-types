namespace ExtendedLoggerInterface {

interface ILogger {
    log(line: string): void;
}

interface IExtendedLogger extends ILogger {
    warn(line: string): void;
    error(line: string): void;
}

}