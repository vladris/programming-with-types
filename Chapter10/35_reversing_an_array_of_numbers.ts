namespace ReversingAnArrayOfNumbers {

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

class ArrayIterator<T> implements IBidirectionalIterator<T> {
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

    equals(other: IBidirectionalIterator<T>): boolean {
        return this.index == (<ArrayIterator<T>>other).index;
    }

    clone(): IBidirectionalIterator<T> {
        return new ArrayIterator(this.array, this.index);
    }
}

let array: number[] = [1, 2, 3, 4, 5];

let begin: IBidirectionalIterator<number>
    = new ArrayIterator(array, 0);
let end: IBidirectionalIterator<number>
    = new ArrayIterator(array, array.length);

reverse(begin, end);

console.log(array);

}