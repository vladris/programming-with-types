namespace Immutability {

function safeDivide(): number {
    const x: number = 42;

    if (x == 0) throw new Error("x should not be 0");

    /*
    Uncomment to see compilation failure when trying to change a constant

    x = x - 42;
    */

    return 42 / x;
}

console.log(safeDivide());

}
