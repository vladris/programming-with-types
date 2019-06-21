namespace ArrayIteratorImplementingARandomAccessIterator {

interface IIncrementable<T> {
    increment(): void;
}

interface IReadable<T> {
    get(): T;
}

interface IWritable<T> {
    set(value: T): void;
}

interface IRandomAccessIterator<T>
    extends IReadable<T>, IWritable<T>, IIncrementable<T> {
    decrement(): void;
    equals(other: IRandomAccessIterator<T>): boolean;
    clone(): IRandomAccessIterator<T>;
    move(n: number): void;
    distance(other: IRandomAccessIterator<T>): number;
}

class ArrayIterator<T> implements IRandomAccessIterator<T> {
    private array: T[];
    private index: number;

    constructor(array: T[], index: number) {
        this.array = array;
        this.index = index;
    }

    get(): T {
        return this.array[this.index];
    }

    set(value: T): void {
        this.array[this.index] = value;
    }

    increment(): void {
        this.index++;
    }

    decrement(): void {
        this.index--;
    }

    equals(other: IRandomAccessIterator<T>): boolean {
        return this.index == (<ArrayIterator<T>>other).index;
    }

    clone(): IRandomAccessIterator<T> {
        return new ArrayIterator(this.array, this.index);
    }

    move(n: number): void {
        this.index += n;
    }

    distance(other: IRandomAccessIterator<T>): number {
        return this.index - (<ArrayIterator<T>>other).index;
    }
}

}