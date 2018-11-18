namespace ArrayBasedListWithCapacity {

class NumberList {
    private numbers: number[] = new Array(1);
    private length: number = 0;
    private capacity: number = 1;

    at(index: number): number {
        if (index >= this.length) throw new RangeError();
        return this.numbers[index];
    }

    append(value: number) {
        if (this.length < this.capacity) {
            this.numbers[length] = value;
            this.length++;
            return;
        }

        this.capacity = this.capacity * 2;
        let newNumbers: number[] = new Array(this.capacity);
        for (let i = 0; i < this.length; i++) {
            newNumbers[i] = this.numbers[i];
        }
        newNumbers[this.length] = value;
        this.numbers = newNumbers;
        this.length++;
    }
}

}