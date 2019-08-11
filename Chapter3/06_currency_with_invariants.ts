namespace CurrencyWithInvariants {

class Currency {
    private dollars: number = 0;
    private cents: number = 0;

    constructor(dollars: number, cents: number) {
        this.assignDollars(dollars);
        this.assignCents(cents);
    }

    getDollars(): number {
        return this.dollars;
    }

    assignDollars(dollars: number) {
        if (!Number.isSafeInteger(dollars) || dollars < 0)
            throw new Error();

        this.dollars = dollars;
    }

    getCents(): number {
        return this.cents;
    }

    assignCents(cents: number) {
        if (!Number.isSafeInteger(cents) || cents < 0)
            throw new Error();

        this.assignDollars(this.dollars + Math.floor(cents / 100));
        this.cents = cents % 100;
    }
}

}