namespace ResultOrError {

enum DayOfWeek {
    Sunday,
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday
}

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

enum InputError {
    NoInput,
    Invalid
}

type Result = Either<InputError, DayOfWeek>;

function parseDayOfWeek(input: string): Result {
    if (input == "")
        return Either.makeLeft(InputError.NoInput);

    switch (input.toLowerCase()) {
        case "sunday":
            return Either.makeRight(DayOfWeek.Sunday);
        case "monday":
            return Either.makeRight(DayOfWeek.Monday);
        case "tuesday":
            return Either.makeRight(DayOfWeek.Tuesday);
        case "wednesday":
            return Either.makeRight(DayOfWeek.Wednesday);
        case "thursday":
            return Either.makeRight(DayOfWeek.Thursday);
        case "friday":
            return Either.makeRight(DayOfWeek.Friday);
        case "saturday":
            return Either.makeRight(DayOfWeek.Saturday);
        default:
            return Either.makeLeft(InputError.Invalid);
    }
}

}