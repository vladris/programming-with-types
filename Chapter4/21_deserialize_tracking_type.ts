namespace DeerializeTrackingType {

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

    return <Cat>JSON.parse(from.substr(1));
}

let catString: string = serializeCat(new Cat());
let dogString: string = serializeDog(new Dog());

let maybeCat: Cat | undefined = tryDeserializeCat(catString);

if (maybeCat != undefined) {
    let cat: Cat = <Cat>maybeCat;
    cat.meow();
}

maybeCat = tryDeserializeCat(dogString);

}