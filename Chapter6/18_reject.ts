namespace Rejct {

let promise1 = new Promise<string>((resolve: (value: string) => void, reject: (value: string) => void) => {
    reject("Boo");
});

promise1
.then((value: string) => {})
.then((value: void) => { return 5; })
.catch((reason: string) => { console.log("!" + reason); });

}