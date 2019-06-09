namespace DefaultTransform {

type TransformFunction = (value: number) => number;

function doNothing(value: number): number {
    return value;
}

function getNumbers(
    transform: TransformFunction = doNothing): number[] {
    /* ... */
    throw Error("not implemented");
}

}