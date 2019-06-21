namespace FunctionMap {

namespace Function {
    export function map<T, U>(
        f: (arg1: T, arg2: T) => T, func: (value: T) => U)
        : (arg1: T, arg2: T) => U {
        return (arg1: T, arg2: T) => func(f(arg1, arg2));
    }
}

}