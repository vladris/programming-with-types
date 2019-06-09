namespace ConsumingValuesFromTheStream {

function* generateRandomNumbers(): IterableIterator<number> {
    while (true) {
        yield Math.random();
    }
}

let iter: IterableIterator<number> = generateRandomNumbers();

console.log(iter.next().value);
console.log(iter.next().value);
console.log(iter.next().value);

}