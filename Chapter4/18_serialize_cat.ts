namespace SerializeCat {

class Cat {
    meow() {
        /* ... */
    }
}

let serializedCat: string = JSON.stringify(new Cat());

// serializeCat.meow();

}