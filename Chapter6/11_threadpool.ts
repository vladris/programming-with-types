namespace Threadpool {

const threads = require('worker-threads');

function countDown(counterId: string, from: number): void {
    while (from >= 0) {
        console.log(`${counterId}: ${from}`);
        from--;
    }
}

if (threads.isMainThread) {
    new threads.Worker(__filename, { workerData: { id: "counter1", from: 4 }});
    new threads.Worker(__filename, { workerData: { id: "counter2", from: 2 }});
} else {
    countDown(threads.workerData.id, threads.workerData.from);
}

}