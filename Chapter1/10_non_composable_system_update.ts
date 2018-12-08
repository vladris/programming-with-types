namespace NonComposableSystemUpdate {

function findFirstNegativeNumber(numbers: number[]): number | undefined {
    for (let i of numbers) {
        if (i < 0) return i;
    }
    console.error("No matching value found");
}

function findFirstOneCharacterString(strings: string[]): string | undefined {
    for (let str of strings) {
        if (str.length == 1) return str;
    }
    console.error("No matching value found");
}

}