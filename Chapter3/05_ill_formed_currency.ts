namespace IllFormedCurrency {

class Currency {
    dollars: number;
    cents: number;

    constructor(dollars: number, cents: number) {
        this.dollars = dollars;
        this.cents = cents;
    }
}

let amount: Currency = new Currency(-5, 300);

}