namespace UnitTypeImplementation {

class Unit {
    private __property: void;
    static readonly value: Unit = new Unit();
    private constructor() { };
}

function greet(): Unit {
    console.log("Hello world!");
    return Unit.value;
}

}