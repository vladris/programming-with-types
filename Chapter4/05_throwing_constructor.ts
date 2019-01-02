namespace ThrowingConstructor {

declare const celsiusType: unique symbol;

class Celsius {
    readonly value: number;
    [celsiusType]: void;

    constructor(value: number) {
        if (value < -273.15) throw new Error();

        this.value = value;
    }
}

}