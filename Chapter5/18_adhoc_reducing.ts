namespace AdhocReducing {

let numbers: number[] = [1, 2, 3, 4, 5];
let product: number = 1;

for (let n of numbers) {
    product = product * n;
}

let strings: string[] = ["apple", "orange", "peach"];
let longString: string = "";

for (let s of strings) {
    longString = longString + s;
}

}