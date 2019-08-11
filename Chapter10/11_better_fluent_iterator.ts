namespace BetterFluentIterable {

class FluentIterable<T> {
    iter: Iterable<T>;

    constructor(iter: Iterable<T>) {
        this.iter = iter;
    }

    map<U>(func: (item: T) => U): FluentIterable<U> {
        return new FluentIterable(this.mapImpl(func));
    }

    private *mapImpl<U>(func: (item: T) => U): IterableIterator<U> {
        for (const value of this.iter) {
            yield func(value);
        }
    }

    filter<U>(pred: (item: T) => boolean): FluentIterable<T> {
        return new FluentIterable(this.filterImpl(pred));
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