namespace MixingInBehavior {

class Animal { 
    eat(): void { }
}

class Pet extends Animal { 
    play(): void { }
}

function extend<First, Second>(first: First, second: Second): 
    First & Second {    
    const result: unknown = {};
    for (const prop in first) {    
        if (first.hasOwnProperty(prop)) {
            (<First>result)[prop] = first[prop];
        }
    }
    for (const prop in second) {    
        if (second.hasOwnProperty(prop)) {
            (<Second>result)[prop] = second[prop];
        }
    }
    return <First & Second>result;
}

class MeowingPet extends Pet {
    meow(): void {
        /* ... */
    }
}

class HunterBehavior {
    track(): void {
        /* ... */
    }

    stalk(): void {
        /* ... */
    }

    pounce(): void {
        /* ... */
    }
}

type Cat = MeowingPet & HunterBehavior;

const fluffy: Cat = extend(new MeowingPet(), new HunterBehavior());    

}