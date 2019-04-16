namespace ChainingFunctionsThatDontReturnPromises {

declare function getUserName(): Promise<string>;

getUserName()
    .then((name: string) => {
        return `Hi ${name}!`;
    })
    .then((greeting: string) => {
        console.log(greeting);
    });

}