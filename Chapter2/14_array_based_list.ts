namespace ArrayBasedList {

class NumberArrayList {
    private numbers: number[] = [];
    private length: number = 0;

    at(index: number): number {
        if (index >= this.length) throw new RangeError();
        return this.numbers[index];
    }

    append(value: number) {
        let newNumbers: number[] = new Array(this.length + 1);
        for (let i = 0; i < this.length; i++) {
            newNumbers[i] = this.numbers[i];
        }
        newNumbers[this.length] = value;
        this.numbers = newNumbers;
        this.length++;
    }
}

}