namespace CarWashStrategy {

class Car {
    /* Represents a car */
}

interface IWashingStrategy {
    wash(car: Car): void;
}

class StandardWash implements IWashingStrategy {
    wash(car: Car): void {
        /* Perform standard wash */
    }
}

class PremiumWash implements IWashingStrategy {
    wash(car: Car): void {
        /* Perform premium wash */
    }
}

class CarWash {
    service(car: Car, premium: boolean) {
        let washingStrategy: IWashingStrategy;

        if (premium) {
            washingStrategy = new PremiumWash();
        } else {
            washingStrategy = new StandardWash();
        }

        washingStrategy.wash(car);
    }
}

}