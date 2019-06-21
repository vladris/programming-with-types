namespace MapWithInputAndOutputIterators {

interface IIncrementable<T> {
    increment(): void;
}

interface IReadable<T> {
    get(): T;
}

interface IWritable<T> {
    set(value: T): void;
}

interface IInputIterator<T> extends IReadable<T>, IIncrementable<T> {
    equals(other: IInputIterator<T>): boolean;
}

interface IOutputIterator<T> extends IWritable<T>, IIncrementable<T> {
    equals(other: IOutputIterator<T>): boolean;
}

function map<T, U>(
    begin: IInputIterator<T>, end: IInputIterator<T>,
    out: IOutputIterator<U>,
    func: (value: T) => U): void {
    while (!begin.equals(end)) {
        out.set(func(begin.get()));

        begin.increment();
        out.increment();
    }
}

}