namespace ListBind {

function divisors(n: number): number[] {
    let result: number[] = [];

    for (let i = 2; i <= n / 2; i++) {
        if (n % i == 0) {
            result.push(i);
        }
    }

    return result;
}

declare function anagram(input: string): string[];

function bind<T, U>(inputs: T[], func: (value: T) => U[]): U[] {
    let result: U[] = [];

    for (const input of inputs) {
        result = result.concat(func(input));
    }

    return result;
}

function allDivisors(ns: number[]): number[] {
    return bind(ns, divisors);
}

function allAnagrams(inputs: string[]): string[] {
    return bind(inputs, anagram);
}

}