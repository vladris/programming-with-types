namespace UnsafeUseOfAny {

function identity(value: any): any {
    return value;
}

function square(x: number): number {
    return x * x;
}

square(identity("Hello!"));    

}