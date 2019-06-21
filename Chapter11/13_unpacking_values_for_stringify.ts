namespace UnpackingValuesForStringify {

class Box<T> {
    value: T;

    constructor(value: T) {
        this.value = value;
    }
}

function stringify(value: number): string {
    return value.toString();
}

function stringifySumType(value: number | undefined)
    : string | undefined {
    if (value == undefined) return undefined;

    return stringify(value);
}

function stringifyBox(box: Box<number>): Box<string> {
    return new Box(stringify(box.value))
}

}