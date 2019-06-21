namespace FindWithForwardIterator {

interface IIncrementable<T> {
    increment(): void;
}

interface IReadable<T> {
    get(): T;
}

interface IWritable<T> {
    set(value: T): void;
}

interface IForwardIterator<T> extends 
    IReadable<T>, IWritable<T>, IIncrementable<T> {
    equals(other: IForwardIterator<T>): boolean;
    clone(): IForwardIterator<T>;
}

function find<T>(
    begin: IForwardIterator<T>, end: IForwardIterator<T>,
    pred: (value: T) => boolean): IForwardIterator<T> {
    while (!begin.equals(end)) {
        if (pred(begin.get())) {
            return begin;
        }

        begin.increment();
    }

    return end;
}

}