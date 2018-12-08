namespace BadMutation {

function safeDivide(): number {
    let x: number = 42;

    if (x == 0) throw new Error("x should not be 0");

    x = x - 42;

    return 42 / x;
}

console.log(safeDivide());

}