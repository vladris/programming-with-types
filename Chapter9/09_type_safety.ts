namespace TypeSafety {

function square(x: number): number {
    return x * x;
}

function identity<T>(value: T): T {
    return value;
}

// Uncomment to see compiler error
// square(identity("Hello!"));

}