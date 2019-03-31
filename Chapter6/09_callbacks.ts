
namespace Sequential {

function greet(): void {
    const readlineSync = require('readline-sync');

    let name: string = readlineSync.question("What is your name? ");
    console.log(`Hi ${name}!`);
}

function next(): void {
    const open = require('open');
    open('https://www.manning.com/');
}

greet();
next();

}

namespace WithCallbacks {

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

function next(): void {
    const open = require('open');
    open('https://www.manning.com/');
}

greet();
next();

}

namespace ManyCallbacks {

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("What is your name? ", (name: string) => {
    console.log(`Hi ${name}!`);
    rl.question("How old are you? ", (age: string) => {
        console.log("Age");
        rl.question("???", (z: string) => {
            console.log();
            rl.close();
        })
    });
});


}