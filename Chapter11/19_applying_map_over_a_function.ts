namespace ApplyingMapOverAFunction {

namespace Function {
    export function map<T, U>(
        f: (arg1: T, arg2: T) => T, func: (value: T) => U)
        : (arg1: T, arg2: T) => U {
        return (arg1: T, arg2: T) => func(f(arg1, arg2));
    }
}

function add(x: number, y: number): number {
    return x + y;
}

function stringify(value: number): string {
    return value.toString();
}

const result: string = Function.map(add, stringify)(40, 2);

}