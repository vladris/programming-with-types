namespace SynchronousExecution {

function greet(): void {
    const readlineSync = require('readline-sync');

    let name: string = readlineSync.question("What is your name? ");
    console.log(`Hi ${name}!`);
}

function weather(): void {
    const open = require('open');
    open('https://www.weather.com/');
}

greet();
weather();

}