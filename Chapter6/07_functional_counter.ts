namespace FunctionalCounter {

type Counter = () => number;

function makeCounter(): Counter {
    let n: number = 0;

    return () => { return n++ };
}

let counter1: Counter = makeCounter();
let counter2: Counter = makeCounter();

console.log(counter1());
console.log(counter2());
console.log(counter1());
console.log(counter2());


}