namespace ImmutableCurrency {

class Currency {
    readonly dollars: number;
    readonly cents: number;

    constructor(dollars: number, cents: number) {
        if (!Number.isSafeInteger(cents) || cents < 0)
            throw new Error();

        dollars = dollars + Math.floor(cents / 100);
        cents = cents % 100;

        if (!Number.isSafeInteger(dollars) || dollars < 0)
            throw new Error();

        this.dollars = dollars;
        this.cents = cents; 
    }
}

}