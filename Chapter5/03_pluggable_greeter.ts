namespace PluggableGreeter {

function sayGoodMorning(): void {
    console.log("Good morning!");
}

function sayGoodNight(): void {
    console.log("Good night!");
}

class Greeter {
    greet: () => void = sayGoodMorning;
}

let greeter: Greeter = new Greeter();

greeter.greet();

greeter.greet = sayGoodNight;

greeter.greet();    

}