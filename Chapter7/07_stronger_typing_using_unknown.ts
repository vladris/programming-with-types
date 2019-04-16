namespace StrongerTypingUsingUnknown {

class User {
    name: string;

    constructor(name: string) {
        this.name = name;
    }
}

function deserialize(input: string): unknown {
    return JSON.parse(input);
}

function greet(user: User): void {
    console.log(`Hi ${user.name}!`);
}

function isUser(user: any): user is User {
    if (user === null || user === undefined)
        return false;

    return typeof user.name === 'string';
}

let user: unknown = deserialize('{ "name": "Alice" }');
if (isUser(user))
    greet(user);

user = deserialize("null");
if (isUser(user))
    greet(user);

}