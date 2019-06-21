namespace UnpackingValuesForSquare {

class Box<T> {
    value: T;

    constructor(value: T) {
        this.value = value;
    }
}

function square(value: number): number {
    return value ** 2;
}

function squareSumType(value: number | undefined)
    : number | undefined {
    if (value == undefined) return undefined;

    return square(value);
}

function squareBox(box: Box<number>): Box<number> {
    return new Box(square(box.value));
}

}