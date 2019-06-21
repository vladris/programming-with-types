namespace ProcessingANumber {

function square(value: number): number {
    return value ** 2;
}

function stringify(value: number): string {
    return value.toString();
}

function readNumber(): number | undefined {
    /* Implementation omitted */
    return undefined;
}

function process(): string | undefined {
    let value: number | undefined = readNumber();

    if (value == undefined) return undefined;

    return stringify(square(value));
}

}