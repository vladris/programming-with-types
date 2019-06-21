namespace IInputIterator {

interface IReadable<T> {
    get(): T;
}

interface IIncrementable<T> {
    increment(): void;
}

interface IInputIterator<T> extends IReadable<T>, IIncrementable<T> {
    equals(other: IInputIterator<T>): boolean;
}

}