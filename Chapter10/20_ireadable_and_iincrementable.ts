namespace IReadableAndIIncrementable {

interface IReadable<T> {
    get(): T;
}

interface IIncrementable<T> {
    increment(): void;
}

}