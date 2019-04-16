namespace CountingDownInAnEventLoop {

type AsyncFunction = () => void;

let queue: AsyncFunction[] = [];

function countDown(counterId: string, from: number): void {    
    console.log(`${counterId}: ${from}`);

    if (from > 0)
        queue.push(() => countDown(counterId, from - 1));
}

queue.push(() => countDown('counter1', 4));

while (queue.length > 0) {
    let func: AsyncFunction = <AsyncFunction>queue.shift();
    func();
}

}