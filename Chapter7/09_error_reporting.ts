namespace ErrorReporting {

function fail(message: string): never {
    console.error(message);
    throw new Error(message);
}

}