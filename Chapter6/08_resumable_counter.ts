namespace ResumableCounter {

function* counter(): IterableIterator<number> {
    let n: number = 1;

    while (true) {
        yield n++;
    }
}

let counter1: IterableIterator<number> = counter();
let counter2: IterableIterator<number> = counter();

console.log(counter1.next());
console.log(counter2.next());
console.log(counter1.next());
console.log(counter2.next());


}