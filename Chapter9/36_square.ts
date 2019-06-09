namespace Square {

function* square(iter: Iterable<number>):
    IterableIterator<number> {
    for (const value of iter) {
        yield value ** 2;
    }
}

}