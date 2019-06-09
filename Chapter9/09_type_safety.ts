namespace TypeSafety {

function identity<T>(value: T): T {
    return value;
}

// Uncomment to see compiler error
// square(identity("Hello!"));

}