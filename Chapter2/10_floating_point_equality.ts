namespace FloatingPointEquality {

function epsilonEqual(a: number, b: number): boolean { 
    return Math.abs(a - b) < Number.EPSILON;
}

console.log(0.1 + 0.1 + 0.1 == 0.3);
console.log(epsilonEqual(0.1 + 0.1 + 0.1, 0.3));

}