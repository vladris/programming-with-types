namespace ConsoleOutputIterator {

interface IIncrementable<T> {
    increment(): void;
}

interface IWritable<T> {
    set(value: T): void;
}

interface IOutputIterator<T> extends IWritable<T>, IIncrementable<T> {
    equals(other: IOutputIterator<T>): boolean;
}

class ConsoleOutputIterator<T> implements IOutputIterator<T> {
    set(value: T): void {
        console.log(value);
    }

    increment(): void { }

    equals(other: IOutputIterator<T>): boolean {
        return false;
    }
}

}