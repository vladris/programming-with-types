namespace CounterWithCallback {

type AsyncFunction = () => void;

let queue: AsyncFunction[] = [];

function countDown(counterId: string, from: number, 
    callback: () => void): void {
    console.log(`${counterId}: ${from}`);

    if (from > 0)
        queue.push(() => countDown(counterId, from - 1, callback));
    else
        queue.push(callback);
}

queue.push(() => countDown('counter1', 4, 
    () => console.log('Done')));


}