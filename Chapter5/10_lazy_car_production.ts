namespace LazyCarProduction {

function isItRaining(): boolean {
    return true;
}

class Bike { }
class Car { }

function chooseMyRide(bike: Bike, car: () => Car): Bike | Car {
    if (isItRaining()) {
        return car();
    } else {
        return bike;
    }
}

function makeCar(): Car {
    return new Car();
}

chooseMyRide(new Bike(), makeCar);

}