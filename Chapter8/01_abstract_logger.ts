namespace AbstractLogger {

abstract class ALogger {
    abstract log(line: string): void;
}

class ConsoleLogger extends ALogger {
    log(line: string): void {
        console.log(line);
    }
}

}