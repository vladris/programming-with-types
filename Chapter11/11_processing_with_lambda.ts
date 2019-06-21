namespace ProcessingWithLambda {

function square(value: number): number {
    return value ** 2;
}

function stringify(value: number): string {
    return value.toString();
}

function readNumber(): number | undefined {
    /* Implementation omitted */
    return undefined;
}

namespace SumType {
    export function map<T, U>(
        value: T | undefined, func: (value: T) => U): U | undefined {
        if (value == undefined) {
            return undefined;
        } else {
            return func(value);
        }
    }
}

function process(): string | undefined {
    let value: number | undefined = readNumber();

    return SumType.map(value,
        (value: number) => stringify(square(value)));
}

}