namespace ReverseWithBidirectionalIterators {

interface IIncrementable<T> {
    increment(): void;
}

interface IReadable<T> {
    get(): T;
}

interface IWritable<T> {
    set(value: T): void;
}

interface IBidirectionalIterator<T> extends 
    IReadable<T>, IWritable<T>, IIncrementable<T> {
    decrement(): void;
    equals(other: IBidirectionalIterator<T>): boolean;
    clone(): IBidirectionalIterator<T>;
}

function reverse<T>(
    begin: IBidirectionalIterator<T>, end: IBidirectionalIterator<T>
    ): void {
    while (!begin.equals(end)) {
        end.decrement();
        if (begin.equals(end)) return;

        const temp: T = begin.get();
        begin.set(end.get());
        end.set(temp);

        begin.increment();
    }
}

}