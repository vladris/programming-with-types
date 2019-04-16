namespace DeserializingAny {

class User {
    name: string;

    constructor(name: string) {
        this.name = name;
    }
}

function deserialize(input: string): any {
    return JSON.parse(input);
}

function greet(user: User): void {
    console.log(`Hi ${user.name}!`);
}

greet(deserialize('{ "name": "Alice" }'));
greet(deserialize('{}'));

}