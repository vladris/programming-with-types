namespace ElementAtWithInputAndRandomAccessIterator {

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

interface IRandomAccessIterator<T>
    extends IReadable<T>, IWritable<T>, IIncrementable<T> {
    decrement(): void;
    equals(other: IRandomAccessIterator<T>): boolean;
    clone(): IRandomAccessIterator<T>;
    move(n: number): void;
    distance(other: IRandomAccessIterator<T>): number;
}

function elementAtForwardIterator<T>(
    begin: IForwardIterator<T>, end: IForwardIterator<T>,
    n: number): IForwardIterator<T> {
    while (!begin.equals(end) && n > 0) {
        begin.increment();
        n--;
    }

    return begin;
}

function elementAtRandomAccessIterator<T>(
    begin: IRandomAccessIterator<T>, end: IRandomAccessIterator<T>,
    n: number): IRandomAccessIterator<T> {
    begin.move(n);

    if (begin.distance(end) <= 0) return end;

    return begin;
}

}