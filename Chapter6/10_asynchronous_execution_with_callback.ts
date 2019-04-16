namespace AsynchronousExecutionWithCallback {

function greet(): void {
    const readline = require('readline');
    
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question("What is your name? ", (name: string) => {
        console.log(`Hi ${name}!`);
        rl.close();
    });
}

function weather(): void {
    const open = require('open');
    open('https://www.weather.com/');
}

greet();
weather();

}