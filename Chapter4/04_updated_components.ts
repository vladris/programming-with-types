namespace UpdatedComponents {

declare const NsType: unique symbol;

class Ns {
    readonly value: number;
    [NsType]: void;

    constructor(value: number) {
        this.value = value;
    }
}

declare const LbfsType: unique symbol;

class Lbfs {
    readonly value: number;
    [LbfsType]: void;

    constructor(value: number) {
        this.value = value;
    }
}

function lbfsToNs(lbfs: Lbfs): Ns {
    return new Ns(lbfs.value * 4.448222);
}

function disintegrate() { }

function trajectoryCorrection(momentum: Ns) {
    if (momentum.value < new Ns(2).value)  {
        disintegrate();
    }

    /* ... */
}

function provideMomentum() {
    trajectoryCorrection(lbfsToNs(new Lbfs(1.5)));
}

}