namespace IsLeftGetLeft {

class Either<TLeft, TRight> {
    private readonly value: TLeft | TRight;
    private readonly left: boolean;

    private constructor(value: TLeft | TRight, left: boolean) {
        this.value = value;
        this.left = left;
    }
    
    /* ... */

    isLeft(): boolean {
        return this.left;
    }

    getLeft(): TLeft {    
        if (!this.isLeft()) throw new Error();

        return <TLeft>this.value;
    }

    /* ... */
}

}