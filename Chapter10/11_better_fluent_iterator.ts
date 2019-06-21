namespace BetterFluentIterator {

class FluentIterator<T> {
    iter: IterableIterator<T>;

    constructor(iter: IterableIterator<T>) {
        this.iter = iter;
    }

    map<U>(func: (item: T) => U): FluentIterator<U> {
        return new FluentIterator(this.mapImpl(func));
    }

    private *mapImpl<U>(func: (item: T) => U): IterableIterator<U> {
        for (const value of this.iter) {
            yield func(value);
        }
    }

    filter<U>(pred: (item: T) => boolean): FluentIterator<T> {
        return new FluentIterator(this.filterImpl(pred));
    }

    private *filterImpl(pred: (item: T) => boolean): IterableIterator<T> {
        for (const value of this.iter) {
            if (pred(value)) {
                yield value;
            }
        }
    }

    reduce(init: T, op: (x: T, y: T) => T): T {
        let result: T = init;

        for (const value of this.iter) {
            result = op(result, value);
        }

        return result;
    }
}

}