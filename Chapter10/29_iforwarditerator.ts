namespace IForwardIterator {

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

}