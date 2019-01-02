namespace EitherRevisited {

class Either<TLeft, TRight> {
    private readonly value: TLeft | TRight;
    private readonly left: boolean;

    private constructor(value: TLeft | TRight, left: boolean) {
        this.value = value;
        this.left = left;
    }

    /* ... */

    static makeLeft<TLeft, TRight>(value: TLeft) {
        return new Either<TLeft, TRight>(value, true);
    }

    static makeRight<TLeft, TRight>(value: TRight) {
        return new Either<TLeft, TRight>(value, false);
    }
}

}