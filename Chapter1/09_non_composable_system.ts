namespace NonComposableSystem {

function findFirstNegativeNumber(numbers: number[]): number | undefined {
    for (let i of numbers) {
        if (i < 0) return i;
    }
}

function findFirstOneCharacterString(strings: string[]): string | undefined {
    for (let str of strings) {
        if (str.length == 1) return str;
    }
}

}