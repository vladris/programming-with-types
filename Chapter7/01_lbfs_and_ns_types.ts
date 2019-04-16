namespace LbfsAndNsTypes {

declare const NsType: unique symbol;

class Ns {
    value: number;
    [NsType]: void;

    constructor(value: number) {
        this.value = value;
    }
}

declare const LbfsType: unique symbol;

class Lbfs {
    value: number;
    [LbfsType]: void;

    constructor(value: number) {
        this.value = value;
    }
}

}