namespace CurrencyClass {

class Currency {  
    private readonly cents: number;    

    constructor(dollars: number, cents: number) {
        this.cents = dollars * 100 + cents;

        if (!Number.isSafeInteger(this.cents))    
            throw new Error("Cannot safely represent amount");
    }

    getDollars(): number {    
        return Math.floor(this.cents / 100);
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