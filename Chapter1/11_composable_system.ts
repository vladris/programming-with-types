namespace ComposableSystem {

function first<T>(range: T[], p: (elem: T) => boolean): T | undefined {
    for (let elem of range) {
        if (p (elem)) return elem;
    }
}

function findFirstNegativeNumber(numbers: number[]): number | undefined {
    return first(numbers, n => n < 0);
}

function findFirstOneCharacterString(strings: string[]): string | undefined {
    return first(strings, str => str.length == 1);
}

}