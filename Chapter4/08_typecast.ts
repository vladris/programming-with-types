namespace Typecast {

class Bike {
    ride(): void { /* ... */ }
}

class SportsCar {
    drive(): void { /* ... */ }
}

let myBike: Bike = new Bike();

myBike.ride();

let myPretendSportsCar: SportsCar = <SportsCar><unknown>myBike;

myPretendSportsCar.drive();

}