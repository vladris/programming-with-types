namespace VariantVisit {

class Variant<T1, T2, T3> {
    readonly value: T1 | T2 | T3;
    readonly index: number;

    private constructor(value: T1 | T2 | T3, index: number) {
        this.value = value;
        this.index = index;
    }

    static make1<T1, T2, T3>(value: T1): Variant<T1, T2, T3> {
        return new Variant<T1, T2, T3>(value, 0);
    }

    static make2<T1, T2, T3>(value: T2): Variant<T1, T2, T3> {
        return new Variant<T1, T2, T3>(value, 1);
    }

    static make3<T1, T2, T3>(value: T3): Variant<T1, T2, T3> {
        return new Variant<T1, T2, T3>(value, 2);
    }
}

function visit<T1, T2, T3>(
    variant: Variant<T1, T2, T3>,
    func1: (value: T1) => void,
    func2: (value: T2) => void,
    func3: (value: T3) => void
) {
    switch (variant.index) {
        case 0: func1(<T1>variant.value); break;
        case 1: func2(<T2>variant.value); break;
        case 2: func3(<T3>variant.value); break;
        default: throw new Error();
    }
}

}