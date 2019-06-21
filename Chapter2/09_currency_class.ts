namespace CurrencyClass {

class Currency {
    private dollars: number;
    private cents: number;

    constructor(dollars: number, cents: number) {
        if (!Number.isSafeInteger(dollars))
            throw new Error("Cannot safely represent dollar amount");

        if (!Number.isSafeInteger(cents))
            throw new Error("Cannot safely represent cents amount");

        this.dollars = dollars;
        this.cents = cents;
    }

    getDollars(): number {
        return this.dollars;
    }

    getCents(): number {
        return this.cents;
    }
}

function add(currency1: Currency, currency2: Currency): Currency {
    return new Currency(
        currency1.getDollars() + currency2.getDollars(),
        currency1.getCents() + currency2.getCents());
}

} 
