namespace EmptyTypeImplementation {

class Empty {
    private __property: void;
    private constructor() { }
}

function raise(message: string): Empty {
    console.error(`Error "${message}" raised at ${new Date()}`);
    throw new Error(message);
}

}