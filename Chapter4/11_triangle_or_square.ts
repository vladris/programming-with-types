namespace TriangleOrSquare {

class Either<TLeft, TRight> {
    private readonly value: TLeft | TRight;
    private readonly left: boolean;

    private constructor(value: TLeft | TRight, left: boolean) {
        this.value = value;
        this.left = left;
    }

    isLeft(): boolean {
        return this.left;
    }

    getLeft(): TLeft {
        if (!this.isLeft()) throw new Error();

        return <TLeft>this.value;
    }

    isRight(): boolean {
        return !this.left;
    }

    getRight(): TRight {
        if (this.isRight()) throw new Error();

        return <TRight>this.value;
    }

    static makeLeft<TLeft, TRight>(value: TLeft) {
        return new Either<TLeft, TRight>(value, true);
    }

    static makeRight<TLeft, TRight>(value: TRight) {
        return new Either<TLeft, TRight>(value, false);
    }
}

declare const triangleType: unique symbol;   
class Triangle {
    [triangleType]: void;
    /* ... */
}

declare const squareType: unique symbol;
class Square {
    [squareType]: void;
    /* ... */
}

function slot(triangle: Triangle) {
    /* ... */
}

let myTriangle: Either<Triangle,Square>
    = Either.makeLeft(new Triangle());

if (myTriangle.isLeft())
    slot(myTriangle.getLeft()); 

}