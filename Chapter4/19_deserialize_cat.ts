namespace DeserializeCat {

class Cat {
    meow() {
        /* ... */
    }
}

let serializedCat: string = JSON.stringify(new Cat());

let deserializedCat: Cat = 
    <Cat>Object.assign(new Cat(), JSON.parse(serializedCat));

deserializedCat.meow();

}
