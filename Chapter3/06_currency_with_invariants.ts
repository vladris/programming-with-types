namespace CurrencyWithInvariants {

class Currency {
    private dollars: number = 0;
    private cents: number = 0;

    constructor(dollars: number, cents: number) {
        this.setDollars(dollars);
        this.setCents(cents);
    }

    getDollars(): number {
        return this.dollars;
    }

    setDollars(dollars: number) {
        if (!Number.isSafeInteger(dollars) || dollars < 0)
            throw new Error();

        this.dollars = dollars;
    }

    getCents(): number {
        return this.cents;
    }

    setCents(cents: number) {
        if (!Number.isSafeInteger(cents) || cents < 0)
            throw new Error();

        this.setDollars(this.dollars + Math.floor(cents / 100));
        this.cents = cents % 100;
    }
}

}