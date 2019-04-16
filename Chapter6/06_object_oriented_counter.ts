namespace ObjectOrientedCounter {

class Counter {
    private n: number = 1;

    next(): number {
        return this.n++;
    }
}

let counter1: Counter = new Counter();
let counter2: Counter = new Counter();

console.log(counter1.next());
console.log(counter2.next());
console.log(counter1.next());
console.log(counter2.next());

}