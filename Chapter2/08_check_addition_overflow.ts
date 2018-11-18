namespace CheckAdditionOverflow {

function addError(a: number, b: number,
    min: number, max: number): boolean {
    if (b >= 0) {
        return a > max - b;
    } else {
        return a < min - b;
    }   
}

}