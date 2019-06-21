namespace OptionalMonad {

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
    export function unit<T>(value: T): Optional<T> {
        return new Optional(value);
    }

    export function bind<T, U>(
        optional: Optional<T>,
        func: (value: T) => Optional<U>): Optional<U> {
        if (!optional.hasValue()) return new Optional();

        return func(optional.getValue());
    }
}

}