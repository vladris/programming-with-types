namespace EmptyTypeImplementation {

declare const EmptyType: unique symbol;

class Empty {
    [EmptyType]: void;
    private constructor() { }
}

function raise(message: string): Empty {
    console.error(`Error "${message}" raised at ${new Date()}`);
    throw new Error(message);
}

}