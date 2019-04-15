namespace CarWashStrategyRevisited {

class Car {
    /* Represents a car */
}

type WashingStrategy = (car: Car) => void;

function standardWash(car: Car): void {
    /* Perform standard wash */
}

function premiumWash(car: Car): void {
    /* Perform premium wash */
}

class CarWash {
    service(car: Car, premium: boolean) {
        let washingStrategy: WashingStrategy;

        if (premium) {
            washingStrategy = premiumWash;
        } else {
            washingStrategy = standardWash;
        }

        washingStrategy(car);
    }
}

}