namespace SerializeTrackingType {

class Cat {
    meow() { /* ... */ }
}

class Dog {
    bark() { /* ... */ }
}

function serializeCat(cat: Cat): string {
    return "c" + JSON.stringify(cat);
}

function serializeDog(dog: Dog): string {
    return "d" + JSON.stringify(dog);
}

function tryDeserializeCat(from: string): Cat | undefined {
    if (from[0] != "c") return undefined;

    return <Cat>Object.assign(new Cat(), JSON.parse(from.substr(1)));
}

}
