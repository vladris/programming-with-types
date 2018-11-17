namespace Encapsulation {

class SafeDivisor {
    private divisor: number = 1;

    setDivisor(value: number) {
        if (value == 0) throw new Error("Value should not be 0");

        this.divisor = value;
    }

    divide(x: number): number {
        return x / this.divisor;
    }
}

function exploit(): number {
    let sd = new SafeDivisor();

    /*
    Uncomment to see compilation failure: divisor property cannot be accessed

    sd.divisor = 0;
    */

    return sd.divide(42);
}

console.log(exploit());

}
