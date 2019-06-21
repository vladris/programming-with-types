namespace IWritableAndIOutputIterator {

interface IIncrementable<T> {
    increment(): void;
}

interface IWritable<T> {
    set(value: T): void;
}


interface IOutputIterator<T> extends IWritable<T>, IIncrementable<T> {
    equals(other: IOutputIterator<T>): boolean;
}
    
}