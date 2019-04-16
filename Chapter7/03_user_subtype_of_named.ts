namespace UserSubtypeOfNamed {

/* Library code */
class User {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

/* Our code */
interface Named {
    name: string;
}

function greet(named: Named): void {
    console.log(`Hi ${named.name}!`);
}

greet(new User("Alice", 25));

}