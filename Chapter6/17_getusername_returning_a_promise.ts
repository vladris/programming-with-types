namespace GetUserNameReturningAPromise {

function getUserName(): Promise<string> {
    return new Promise<string>(
        (resolve: (value: string) => void) => {
        const readline = require('readline');
    
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        rl.question("What is your name? ", (name: string) => {
            rl.close();
            resolve(name);
        });
    });
}

}