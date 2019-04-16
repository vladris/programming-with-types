namespace LbfsAndNsWithoutUniqueSymbols {

class Ns {
    value: number;

    constructor(value: number) {
        this.value = value;
    }
}

class Lbfs {
    value: number;

    constructor(value: number) {
        this.value = value;
    }
}

function acceptNs(momentum: Ns): void {
    console.log(`Momentum: ${momentum.value} Ns`);
}

acceptNs(new Lbfs(10));

}