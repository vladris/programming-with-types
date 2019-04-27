namespace LoggerInterface {

interface ILogger {
    log(line: string): void;
}

class ConsoleLogger implements ILogger {
    log(line: string): void {
        console.log(line);
    }
}

}