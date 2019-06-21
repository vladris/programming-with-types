namespace AllDivisors {

function divisors(n: number): number[] {
    let result: number[] = [];

    for (let i = 2; i <= n / 2; i++) {
        if (n % i == 0) {
            result.push(i);
        }
    }

    return result;
}

function allDivisors(ns: number[]): number[] {
    let result: number[] = [];

    for (const n of ns) {
        result = result.concat(divisors(n));
    }

    return result;
}

}