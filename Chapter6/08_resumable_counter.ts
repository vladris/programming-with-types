namespace ResumableCounter {

function *counter(): Iterator<number> {
    let n: number = 1;

    while (true) {
        yield n++;
    }
}

let counter1: Iterator<number> = counter();
let counter2: Iterator<number> = counter();

console.log(counter1.next());
console.log(counter2.next());
console.log(counter1.next());
console.log(counter2.next());


}