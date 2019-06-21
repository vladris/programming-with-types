namespace OptionalMap {

class Optional<T> {
    private value: T | undefined;
    private assigned: boolean;

    constructor(value?: T) {
        if (value) {
            this.value = value;
            this.assigned = true;
        } else {
            this.value = undefined;
            this.assigned = false;
        }
    }

    hasValue(): boolean {
        return this.assigned;
    }

    getValue(): T {
        if (!this.assigned) throw Error();

        return <T>this.value;
    }
}

namespace Optional {
    export function map<T, U>(
        optional: Optional<T>, func: (value: T) => U): Optional<U> {
        if (optional.hasValue()) {
            return new Optional<U>(func(optional.getValue()));
        } else {
            return new Optional<U>();
        }
    }
}

}