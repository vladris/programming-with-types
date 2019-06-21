namespace ChainingPromises {

class Car { }

declare function getLocation(): Promise<Location>;
declare function hailRideshare(location: Location): Promise<Car>;

let car: Promise<Car> = getLocation().then(hailRideshare);

}