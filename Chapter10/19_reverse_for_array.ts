namespace ReverseForArray {

function reverse<T>(values: T[]): void {
    let begin: number = 0;
    let end: number = values.length;

    while (begin < end) {
        const temp: T = values[begin];
        values[begin] = values[end - 1];
        values[end - 1] = temp;

        begin++;
        end--;
    }
}

}