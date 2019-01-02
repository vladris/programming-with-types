namespace CoercingConstructor {

declare const celsiusType: unique symbol;

class Celsius {
    readonly value: number;   
    [celsiusType]: void;

    constructor(value: number) {
        if (value < -273.15) value = -273.15;

        this.value = value;
    }
}

}