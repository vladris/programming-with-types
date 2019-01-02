namespace FactoryReturningUndefined {

declare const celsiusType: unique symbol;

class Celsius {
    readonly value: number;
    [celsiusType]: void;

    private constructor(value: number) {
        this.value = value;
    }

    static makeCelsius(value: number): Celsius | undefined {
        if (value < -273.15) return undefined;

        return new Celsius(value);
    }
}

}