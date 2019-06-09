namespace InfiniteStreamOfRandomNumbers{

function* generateRandomNumbers(): IterableIterator<number> {
    while (true) {
        yield Math.random();
    }
}

}