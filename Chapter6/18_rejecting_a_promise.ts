namespace RejectingAPromise {

function getUserName(): Promise<string> {
    const readline = require('readline');
    
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    return new Promise<string>(
        (resolve: (value: string) => void,
         reject: (reason: string) => void) => {
        rl.question("What is your name? ", (name: string) => {
            rl.close();

            if (name.length != 0) {
                resolve(name);
            } else {
                reject("Name can't be empty");
            }
        });
    });
}

getUserName()
    .then((name: string) => { console.log(`Hi ${name}!`); })
    .catch((reason: string) => { console.log(`Error: ${reason}`); });

}