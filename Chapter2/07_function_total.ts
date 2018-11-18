namespace FunctionTotal {

type Item = { name: string, price: number };

function getTotal(items: Item[]): number {
    let total: number = 0;

    for (let item of items) {
        total += item.price;
    }

    return total;
}

let total: number = getTotal(
    [{ name: "Cherry bubblegum", price: 0.10 },
     { name: "Mint bubblegum", price: 0.10 },
     { name: "Strawberry bubblegum", price: 0.10 }]
);

console.log(total == 0.30);

}